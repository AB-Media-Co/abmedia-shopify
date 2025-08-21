import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Mail, User, Phone, Building, X, ChevronDown } from 'lucide-react';
import emailjs from '@emailjs/browser';
import axios from 'axios';
import { toast, Toaster } from 'react-hot-toast';


const ContactForm = ({
    isPopup = false,
    isOpen = false,
    onClose = () => { },
    title = "Let's Build Your Shopify Store!",
    buttonText = "Submit & Book Strategy Call",
    onSubmit = (data) => console.log(data),
    className = "",
    path = ""
}) => {
    // State
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        fullName: '', email: '', phone: '', companyName: '',
        hasShopifyStore: null, shopifyChallenge: '',
        buildTypes: [], budget: '', timeline: ''
    });


    // OTP States
    const [otp, setOtp] = useState('');
    const [sessionId, setSessionId] = useState('');
    const [otpSent, setOtpSent] = useState(false);
    const [isVerifying, setIsVerifying] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const otpInputRef = useRef(null);

    // Configuration
    const API_KEY = '430205a3-18ed-11f0-8b17-0200cd936042';

    // EmailJS Configuration - Replace with your actual values
    const EMAILJS_CONFIG = {
        SERVICE_ID: 'service_552h5so',           // Your EmailJS service ID
        ADMIN_TEMPLATE: 'template_nqjwc3p', // Admin template ID
        USER_TEMPLATE: 'template_lklhfm8', // Customer template ID
        PUBLIC_KEY: 'vO2gQ4pr0ZZywV8If',           // Your EmailJS public key
        ADMIN_EMAIL: 'prakash@abmediaco.com'      // Your email address
    };

    // Initialize EmailJS
    useEffect(() => {
        emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);
    }, []);

    // Focus OTP input
    useEffect(() => {
        if (step === 2 && otpInputRef.current) {
            setTimeout(() => otpInputRef.current.focus(), 100);
        }
    }, [step]);

    const handleInputChange = (e) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleToggleChange = (value) => {
        setFormData(prev => ({
            ...prev,
            hasShopifyStore: value,
            shopifyChallenge: value ? prev.shopifyChallenge : ''
        }));
    };

    const handleOtpChange = (e) => {
        const value = e.target.value.replace(/\D/g, '').slice(0, 6);
        setOtp(value);
    };

    // Send emails function
    const sendEmails = async () => {
        try {
            const currentTime = new Date().toLocaleString('en-IN', {
                timeZone: 'Asia/Kolkata',
                day: '2-digit',
                month: '2-digit',
                year: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
            });

            // Admin email parameters
            const adminParams = {
                user_name: formData.fullName,
                user_email: formData.email,
                user_phone: formData.phone,
                user_company: formData.companyName,
                has_shopify: formData.hasShopifyStore ? 'Yes' : 'No',
                challenge: formData.shopifyChallenge || 'None mentioned',
                build_type: formData.buildTypes.join(', ') || 'Not specified',
                budget: formData.budget,
                timeline: formData.timeline,
                submitted_at: currentTime
            };

            // Customer email parameters
            const customerParams = {
                user_name: formData.fullName,
                user_email: formData.email,
                user_phone: formData.phone,
                user_company: formData.companyName,
                budget: formData.budget,
                timeline: formData.timeline,
                build_type: formData.buildTypes.join(', ') || 'To be discussed'
            };

            // Send both emails simultaneously
            const emailPromises = [
                emailjs.send(
                    EMAILJS_CONFIG.SERVICE_ID,
                    EMAILJS_CONFIG.ADMIN_TEMPLATE,
                    { ...adminParams, to_email: EMAILJS_CONFIG.ADMIN_EMAIL }
                ),
                emailjs.send(
                    EMAILJS_CONFIG.SERVICE_ID,
                    EMAILJS_CONFIG.USER_TEMPLATE,
                    { ...customerParams, to_email: formData.email }
                )
            ];

            await Promise.all(emailPromises);
            console.log('✅ Both emails sent successfully');
            return { success: true };

        } catch (error) {
            console.error('❌ Email sending failed:', error);
            throw new Error('Failed to send emails: ' + error.message);
        }
    };

    // OTP Functions
    const handleSendOTP = async () => {
        const phone = formData.phone.replace(/^0+/, '');
        try {
            const response = await axios.get(`https://2factor.in/API/V1/${API_KEY}/SMS/${phone}/AUTOGEN/OTP1`);
            if (response.data.Status === 'Success') {
                setSessionId(response.data.Details);
                setOtpSent(true);
                setStep(2);
                toast.success('OTP sent successfully!');
            } else {
                toast.error('Failed to send OTP');
            }
        } catch (err) {
            console.error(err);
            toast.error('Error sending OTP');
        } finally {
            setIsLoading(false);
        }
    };

    const handleNext = () => {
        if (!isFormValid()) {
            toast.error("Please fill all required fields");
            return;
        }
        if (formData.phone.length !== 10) {
            toast.error("Please enter a valid 10-digit phone number");
            return;
        }
        setIsLoading(true);
        handleSendOTP();
    };

    const handleVerifyOTP = async () => {
        if (otp.length !== 6) {
            toast.error('Enter a 6-digit OTP');
            return;
        }

        setIsVerifying(true);
        try {
            // Verify OTP
            const response = await axios.get(`https://2factor.in/API/V1/${API_KEY}/SMS/VERIFY/${sessionId}/${otp}`);

            if (response.data.Status === 'Success' && response.data.Details === 'OTP Matched') {
                setIsSubmitting(true);

                try {
                    // Send emails first
                    await sendEmails();

                    // Call original onSubmit
                    await onSubmit(formData);

                    // Reset form
                    setFormData({
                        fullName: '', email: '', phone: '', companyName: '',
                        hasShopifyStore: null, shopifyChallenge: '',
                        buildTypes: [], budget: '', timeline: ''
                    });

                    setStep(1);
                    setOtp('');
                    setOtpSent(false);

                    if (isPopup) onClose();

                    toast.success('🎉 Form submitted successfully! Check your email for confirmation.', {
                        duration: 2000  // Reduced duration
                    });

                    // Immediate redirect without setTimeout
                    if (path && path.includes('/in')) {
                        window.location.href = '/calendly';
                    } else {
                        window.location.href = 'https://calendly.com/ab-abmedia/shopify';
                    }

                } catch (submitError) {
                    console.error('Form submission error:', submitError);
                    toast.error('OTP verified but form submission failed. Please try again.');
                }
            } else {
                toast.error(response.data.Details || 'Invalid OTP');
            }
        } catch (err) {
            console.error(err);
            toast.error('Error verifying OTP');
        } finally {
            setIsVerifying(false);
            setIsSubmitting(false);
        }
    };

    const handleResendOTP = async () => {
        const phone = formData.phone.replace(/^0+/, '');
        try {
            const response = await axios.get(`https://2factor.in/API/V1/${API_KEY}/SMS/${phone}/AUTOGEN/OTP1`);
            if (response.data.Status === 'Success') {
                setSessionId(response.data.Details);
                setOtp('');
                toast.success('OTP resent successfully!');
                setTimeout(() => otpInputRef.current?.focus(), 100);
            } else {
                toast.error('Failed to resend OTP');
            }
        } catch (error) {
            console.error(error);
            toast.error('Error resending OTP');
        }
    };

    // Options
    const buildTypeOptions = [
        'Theme customization', 'Full custom design', 'Shopify Plus',
        'Hydrogen + Oxygen (React) + Liquid + Headless', 'Subscription or B2B logic', 'Unsure — need guidance'
    ];

    const budgetOptions = [
        'Under ₹1L', '₹1L–₹2.5L', '₹2.5L–₹5L', '₹5L+', 'Not sure yet'
    ];

    const timelineOptions = [
        'Within 2 weeks', '2–4 weeks', '1–2 months', 'Flexible'
    ];

    const isFormValid = () => {
        return formData.fullName.trim() && formData.email.trim() &&
            formData.phone.trim() && formData.companyName.trim() &&
            formData.budget && formData.timeline;
    };
    // Component JSX


    const CustomSelect = ({ name, value, onChange, children, placeholder }) => {
        return (
            <div className="relative">
                <select
                    name={name}
                    value={value}
                    onChange={onChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-lime-400 focus:border-transparent outline-none transition-all appearance-none bg-white text-gray-900 placeholder-gray-400"
                    style={{
                        color: value ? '#111827' : '#9CA3AF', // gray-900 for selected, gray-400 for placeholder
                    }}
                >
                    <option value="" className="text-gray-400">{placeholder}</option>
                    {children}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
            </div>
        );
    };



    if (isPopup) {
        if (!isOpen) return null;
        return (
            <div className="fixed inset-0 bg-black/30 bg-opacity-50 z-50 flex items-center justify-center p-4" onClick={onClose}>
                <div className="w-full max-w-[600px] mx-auto" onClick={(e) => e.stopPropagation()}>
                    <div className={`bg-white rounded-2xl p-6 sm:p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto ${className}`}>
                        {isPopup && (
                            <button onClick={onClose} className="absolute cursor-pointer top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors z-10">
                                <X className="w-6 h-6" />
                            </button>
                        )}

                        <div className="mb-6">
                            <h2 className="text-xl sm:text-2xl text-center font-bold text-gray-800 mb-2">{title}</h2>
                        </div>

                        {step === 1 ? (
                            <div className="space-y-6">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div className="relative">
                                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                                        <input type="text" name="fullName" placeholder="Full Name *" value={formData.fullName} onChange={handleInputChange}
                                            className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-lime-400 focus:border-transparent outline-none transition-all" />
                                    </div>
                                    <div className="relative">
                                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                                        <input type="email" name="email" placeholder="Email Address *" value={formData.email} onChange={handleInputChange}
                                            className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-lime-400 focus:border-transparent outline-none transition-all" />
                                    </div>
                                    <div className="relative">
                                        <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                                        <input type="tel" name="phone" placeholder="Phone Number *" value={formData.phone} onChange={handleInputChange}
                                            inputMode="numeric"
                                            pattern="[0-9]*"
                                            maxLength={10}
                                            className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-lime-400 focus:border-transparent outline-none transition-all" />
                                    </div>
                                    <div className="relative">
                                        <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                                        <input type="text" name="companyName" placeholder="Company / Brand Name *" value={formData.companyName} onChange={handleInputChange}
                                            className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-lime-400 focus:border-transparent outline-none transition-all" />
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <CustomSelect
                                        name="hasShopifyStore"
                                        value={formData.hasShopifyStore === null ? '' : formData.hasShopifyStore.toString()}
                                        onChange={(e) => handleToggleChange(e.target.value === '' ? null : e.target.value === 'true')}
                                        placeholder="Do you already have a Shopify store?"
                                    >
                                        <option value="true" className="text-gray-900">Yes</option>
                                        <option value="false" className="text-gray-900">No</option>
                                    </CustomSelect>

                                    {formData.hasShopifyStore === true && (
                                        <textarea name="shopifyChallenge" placeholder="What's your biggest challenge with it? (optional)"
                                            value={formData.shopifyChallenge} onChange={handleInputChange} rows={3}
                                            className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-lime-400 focus:border-transparent outline-none transition-all resize-none" />
                                    )}

                                    <CustomSelect
                                        name="buildType"
                                        value={formData.buildTypes[0] || ''}
                                        onChange={(e) => setFormData(prev => ({ ...prev, buildTypes: e.target.value ? [e.target.value] : [] }))}
                                        placeholder="Select build type you are interested in?"
                                    >
                                        {buildTypeOptions.map(option =>
                                            <option key={option} value={option} className="text-gray-900">{option}</option>
                                        )}
                                    </CustomSelect>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <CustomSelect
                                        name="budget"
                                        value={formData.budget}
                                        onChange={handleInputChange}
                                        placeholder="Select budget range *"
                                    >
                                        {budgetOptions.map(option =>
                                            <option key={option} value={option} className="text-gray-900">{option}</option>
                                        )}
                                    </CustomSelect>

                                    <CustomSelect
                                        name="timeline"
                                        value={formData.timeline}
                                        onChange={handleInputChange}
                                        placeholder="Select timeline *"
                                    >
                                        {timelineOptions.map(option =>
                                            <option key={option} value={option} className="text-gray-900">{option}</option>
                                        )}
                                    </CustomSelect>
                                </div>

                                <button type="button" onClick={handleNext} disabled={isLoading || !isFormValid()}
                                    className="w-full cursor-pointer bg-black text-white py-4 px-6 rounded-lg font-semibold hover:bg-gray-800 transition-colors duration-200 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none">
                                    {isLoading ? (
                                        <>
                                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white inline" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                            </svg>
                                            Sending OTP...
                                        </>
                                    ) : 'Next Step'}
                                </button>
                            </div>
                        ) : (
                            <div className="text-center py-4 sm:py-6 animate-fade-in">
                                <div className="mb-4 sm:mb-6">
                                    <Mail className="w-12 h-12 sm:w-16 sm:h-16 mx-auto text-black" />
                                </div>
                                <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">OTP Sent Successfully!</h3>
                                <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">
                                    We've sent a 6-digit verification code to <span className="font-medium text-black">{formData.phone}</span>
                                </p>

                                <div className="flex justify-center space-x-2 mb-4 sm:mb-6">
                                    <input ref={otpInputRef} autoFocus type="text" value={otp} onChange={handleOtpChange} maxLength="6"
                                        placeholder="Enter OTP" autoComplete="one-time-code" inputMode="numeric" pattern="[0-9]*"
                                        className="w-40 sm:w-48 text-center py-3 sm:py-4 text-black text-lg sm:text-xl border-2 border-gray-300 rounded-lg focus:border-black focus:ring-2 focus:ring-gray-200 outline-none transition-all" />
                                </div>

                                <button onClick={handleVerifyOTP} disabled={isVerifying || isSubmitting}
                                    className="w-full cursor-pointer bg-black hover:bg-gray-800 text-white py-3 rounded-lg font-medium transition-all text-sm sm:text-base mb-4">
                                    {isVerifying ? 'Verifying OTP...' : isSubmitting ? 'Sending Emails...' : buttonText}
                                </button>

                                <button onClick={handleResendOTP}
                                    className="text-xs cursor-pointer sm:text-sm text-black hover:text-gray-800 font-medium mb-4 transition-colors block mx-auto">
                                    Resend OTP
                                </button>

                                <button onClick={() => { setStep(1); setOtp(''); }}
                                    className="w-full cursor-pointer bg-gray-100 hover:bg-gray-200 text-gray-800 py-3 rounded-lg font-medium transition-colors flex items-center justify-center text-sm sm:text-base">
                                    <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                                    </svg>
                                    Back to Previous Step
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="w-full max-w-[600px] mx-auto">
            <div className={`bg-white rounded-2xl p-6 sm:p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto ${className}`}>
                {isPopup && (
                    <button onClick={onClose} className="absolute cursor-pointer top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors z-10">
                        <X className="w-6 h-6" />
                    </button>
                )}

                <div className="mb-6">
                    <h2 className="text-xl sm:text-2xl text-center font-bold text-gray-800 mb-2">{title}</h2>
                </div>
                {step === 1 ? (
                    <div className="space-y-6">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="relative">
                                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                                <input type="text" name="fullName" placeholder="Full Name *" value={formData.fullName} onChange={handleInputChange}
                                    className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-lime-400 focus:border-transparent outline-none transition-all" />
                            </div>
                            <div className="relative">
                                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                                <input type="email" name="email" placeholder="Email Address *" value={formData.email} onChange={handleInputChange}
                                    className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-lime-400 focus:border-transparent outline-none transition-all" />
                            </div>
                            <div className="relative">
                                <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                                <input type="tel" name="phone" placeholder="Phone Number *" value={formData.phone} onChange={handleInputChange}
                                    inputMode="numeric"
                                    pattern="[0-9]*"
                                    maxLength={10}
                                    className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-lime-400 focus:border-transparent outline-none transition-all" />
                            </div>
                            <div className="relative">
                                <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                                <input type="text" name="companyName" placeholder="Company / Brand Name *" value={formData.companyName} onChange={handleInputChange}
                                    className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-lime-400 focus:border-transparent outline-none transition-all" />
                            </div>
                        </div>

                        <div className="space-y-4">
                            <CustomSelect
                                name="hasShopifyStore"
                                value={formData.hasShopifyStore === null ? '' : formData.hasShopifyStore.toString()}
                                onChange={(e) => handleToggleChange(e.target.value === '' ? null : e.target.value === 'true')}
                                placeholder="Do you already have a Shopify store?"
                            >
                                <option value="true" className="text-gray-900">Yes</option>
                                <option value="false" className="text-gray-900">No</option>
                            </CustomSelect>

                            {formData.hasShopifyStore === true && (
                                <textarea name="shopifyChallenge" placeholder="What's your biggest challenge with it? (optional)"
                                    value={formData.shopifyChallenge} onChange={handleInputChange} rows={3}
                                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-lime-400 focus:border-transparent outline-none transition-all resize-none" />
                            )}

                            <CustomSelect
                                name="buildType"
                                value={formData.buildTypes[0] || ''}
                                onChange={(e) => setFormData(prev => ({ ...prev, buildTypes: e.target.value ? [e.target.value] : [] }))}
                                placeholder="Select build type you are interested in?"
                            >
                                {buildTypeOptions.map(option =>
                                    <option key={option} value={option} className="text-gray-900">{option}</option>
                                )}
                            </CustomSelect>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <CustomSelect
                                name="budget"
                                value={formData.budget}
                                onChange={handleInputChange}
                                placeholder="Select budget range *"
                            >
                                {budgetOptions.map(option =>
                                    <option key={option} value={option} className="text-gray-900">{option}</option>
                                )}
                            </CustomSelect>

                            <CustomSelect
                                name="timeline"
                                value={formData.timeline}
                                onChange={handleInputChange}
                                placeholder="Select timeline *"
                            >
                                {timelineOptions.map(option =>
                                    <option key={option} value={option} className="text-gray-900">{option}</option>
                                )}
                            </CustomSelect>
                        </div>

                        <button type="button" onClick={handleNext} disabled={isLoading || !isFormValid()}
                            className="w-full cursor-pointer bg-black text-white py-4 px-6 rounded-lg font-semibold hover:bg-gray-800 transition-colors duration-200 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none">
                            {isLoading ? (
                                <>
                                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white inline" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    Sending OTP...
                                </>
                            ) : 'Next Step'}
                        </button>
                    </div>
                ) : (
                    <div className="text-center py-4 sm:py-6 animate-fade-in">
                        <div className="mb-4 sm:mb-6">
                            <Mail className="w-12 h-12 sm:w-16 sm:h-16 mx-auto text-black" />
                        </div>
                        <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">OTP Sent Successfully!</h3>
                        <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">
                            We've sent a 6-digit verification code to <span className="font-medium text-black">{formData.phone}</span>
                        </p>

                        <div className="flex justify-center space-x-2 mb-4 sm:mb-6">
                            <input ref={otpInputRef} autoFocus type="text" value={otp} onChange={handleOtpChange} maxLength="6"
                                placeholder="Enter OTP" autoComplete="one-time-code" inputMode="numeric" pattern="[0-9]*"
                                className="w-40 sm:w-48 text-center py-3 sm:py-4 text-black text-lg sm:text-xl border-2 border-gray-300 rounded-lg focus:border-black focus:ring-2 focus:ring-gray-200 outline-none transition-all" />
                        </div>

                        <button onClick={handleVerifyOTP} disabled={isVerifying || isSubmitting}
                            className="w-full cursor-pointer bg-black hover:bg-gray-800 text-white py-3 rounded-lg font-medium transition-all text-sm sm:text-base mb-4">
                            {isVerifying ? 'Verifying OTP...' : isSubmitting ? 'Sending Emails...' : buttonText}
                        </button>

                        <button onClick={handleResendOTP}
                            className="text-xs cursor-pointer sm:text-sm text-black hover:text-gray-800 font-medium mb-4 transition-colors block mx-auto">
                            Resend OTP
                        </button>

                        <button onClick={() => { setStep(1); setOtp(''); }}
                            className="w-full cursor-pointer bg-gray-100 hover:bg-gray-200 text-gray-800 py-3 rounded-lg font-medium transition-colors flex items-center justify-center text-sm sm:text-base">
                            <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                            </svg>
                            Back to Previous Step
                        </button>
                    </div>
                )}
            </div>
            <Toaster position="top-center" />
        </div>
    );
};

export default ContactForm;