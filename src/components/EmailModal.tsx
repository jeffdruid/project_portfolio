import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, CheckCircle, AlertCircle } from 'lucide-react';

interface EmailModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function EmailModal({ isOpen, onClose }: EmailModalProps) {
  // Form state management
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  // Form submission status
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  // Close modal on Escape key press
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  // Form input change handler
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Form submission handler with Formspree
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Set status to 'sending'
    setStatus('sending');

    // Formspree endpoint
    const endpoint = `https://formspree.io/f/${import.meta.env.VITE_FORMSPREE_ID}`;

    // Send the form data to Formspree
    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (response.ok) {
        setStatus('success');
        // Reset the form data
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
        });
        
        // Auto close after success
        setTimeout(() => {
          onClose();
          setStatus('idle');
        }, 2000);
      } else {
        throw new Error('Failed to send email');
      }
    } catch (error) {
      setStatus('error');
      console.error('Error sending email:', error);
      
      // Reset error state after 3 seconds
      setTimeout(() => {
        setStatus('idle');
      }, 3000);
    }
  };

  // Status message component
  const StatusMessage = () => {
    if (status === 'idle') return null;

    const variants = {
      initial: { opacity: 0, y: 10 },
      animate: { opacity: 1, y: 0 },
      exit: { opacity: 0, y: -10 }
    };

    const messages = {
      sending: {
        text: "Sending your message...",
        class: "bg-blue-50 text-blue-700",
        icon: <motion.div animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: "linear" }}><Send size={20} /></motion.div>
      },
      success: {
        text: "Message sent successfully!",
        class: "bg-green-50 text-green-700",
        icon: <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring" }}><CheckCircle size={20} /></motion.div>
      },
      error: {
        text: "Failed to send message. Please try again.",
        class: "bg-red-50 text-red-700",
        icon: <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring" }}><AlertCircle size={20} /></motion.div>
      }
    };

    const currentStatus = messages[status];

    return (
      <motion.div
        variants={variants}
        initial="initial"
        animate="animate"
        exit="exit"
        className={`${currentStatus.class} rounded-lg p-4 mb-6 flex items-center gap-3`}
      >
        {currentStatus.icon}
        <span className="font-medium">{currentStatus.text}</span>
      </motion.div>
    );
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-gradient-to-br from-zinc-100 to-white rounded-xl p-8 w-full max-w-lg relative shadow-2xl"
            onClick={e => e.stopPropagation()}
          >
            {/* Close button */}
            <motion.button
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              <X size={24} />
            </motion.button>
            
            <h2 className="text-3xl font-bold mb-6 text-gray-900 tracking-tight">Let's Talk</h2>
            
            <StatusMessage />

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  disabled={status === 'sending'}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-200 text-gray-900 disabled:opacity-50"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  disabled={status === 'sending'}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-200 text-gray-900 disabled:opacity-50"
                  placeholder="your@email.com"
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  disabled={status === 'sending'}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-200 text-gray-900 disabled:opacity-50"
                  placeholder="What's this about?"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  disabled={status === 'sending'}
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent resize-none transition-all duration-200 text-gray-900 disabled:opacity-50"
                  placeholder="Your message here..."
                />
              </div>
              
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={status === 'sending'}
                className={`w-full flex items-center justify-center gap-2 px-6 py-3 font-semibold rounded-lg shadow-md transition-all duration-300 ${
                  status === 'success'
                    ? 'bg-green-500 hover:bg-green-600'
                    : 'bg-black hover:bg-gray-900'
                } text-white disabled:opacity-50`}
              >
                {status === 'sending' ? (
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  >
                    <Send size={18} />
                  </motion.div>
                ) : status === 'success' ? (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring" }}
                  >
                    <CheckCircle size={18} />
                  </motion.div>
                ) : (
                  <Send size={18} />
                )}
                <span>
                  {status === 'sending' ? 'Sending...' : status === 'success' ? 'Sent!' : 'Send Message'}
                </span>
              </motion.button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
