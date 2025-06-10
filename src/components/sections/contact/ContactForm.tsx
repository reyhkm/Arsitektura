"use client";

import { useState, FormEvent } from 'react';
import Button from '@/components/ui/Button';
import { Send, Loader2, CheckCircle } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<Partial<FormData>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormData]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {};
    if (!formData.name.trim()) newErrors.name = 'Nama wajib diisi.';
    if (!formData.email.trim()) {
      newErrors.email = 'Email wajib diisi.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Format email tidak valid.';
    }
    if (!formData.subject.trim()) newErrors.subject = 'Subjek wajib diisi.';
    if (!formData.message.trim()) newErrors.message = 'Pesan wajib diisi.';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitStatus('idle');

    // Replace with your Formspree endpoint or other form handling logic
    const formspreeEndpoint = 'https://formspree.io/f/YOUR_FORMSPREE_ID'; 

    try {
      const response = await fetch(formspreeEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 bg-card dark:bg-dark-card p-6 md:p-8 rounded-lg shadow-lg">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-foreground dark:text-dark-foreground mb-1">Nama Lengkap</label>
        <input 
          type="text" 
          name="name" 
          id="name" 
          value={formData.name} 
          onChange={handleChange} 
          className={`w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 
                      ${errors.name ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 dark:border-gray-600 focus:ring-accent dark:focus:ring-dark-accent'} 
                      bg-background dark:bg-dark-background text-foreground dark:text-dark-foreground`}
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? 'name-error' : undefined}
        />
        {errors.name && <p id="name-error" className="text-sm text-red-500 mt-1">{errors.name}</p>}
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-foreground dark:text-dark-foreground mb-1">Alamat Email</label>
        <input 
          type="email" 
          name="email" 
          id="email" 
          value={formData.email} 
          onChange={handleChange} 
          className={`w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 
                      ${errors.email ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 dark:border-gray-600 focus:ring-accent dark:focus:ring-dark-accent'} 
                      bg-background dark:bg-dark-background text-foreground dark:text-dark-foreground`}
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? 'email-error' : undefined}
        />
        {errors.email && <p id="email-error" className="text-sm text-red-500 mt-1">{errors.email}</p>}
      </div>

      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-foreground dark:text-dark-foreground mb-1">Subjek</label>
        <input 
          type="text" 
          name="subject" 
          id="subject" 
          value={formData.subject} 
          onChange={handleChange} 
          className={`w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 
                      ${errors.subject ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 dark:border-gray-600 focus:ring-accent dark:focus:ring-dark-accent'} 
                      bg-background dark:bg-dark-background text-foreground dark:text-dark-foreground`}
          aria-invalid={!!errors.subject}
          aria-describedby={errors.subject ? 'subject-error' : undefined}
        />
        {errors.subject && <p id="subject-error" className="text-sm text-red-500 mt-1">{errors.subject}</p>}
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-foreground dark:text-dark-foreground mb-1">Pesan Anda</label>
        <textarea 
          name="message" 
          id="message" 
          rows={5} 
          value={formData.message} 
          onChange={handleChange} 
          className={`w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 
                      ${errors.message ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 dark:border-gray-600 focus:ring-accent dark:focus:ring-dark-accent'} 
                      bg-background dark:bg-dark-background text-foreground dark:text-dark-foreground`}
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? 'message-error' : undefined}
        />
        {errors.message && <p id="message-error" className="text-sm text-red-500 mt-1">{errors.message}</p>}
      </div>

      <div>
        <Button type="submit" variant="primary" size="lg" className="w-full group" disabled={isSubmitting}>
          {isSubmitting ? (
            <><Loader2 size={20} className="mr-2 animate-spin" /> Mengirim...</>
          ) : (
            <><Send size={18} className="mr-2 group-hover:translate-x-1 transition-transform" /> Kirim Pesan</>
          )}
        </Button>
      </div>

      {submitStatus === 'success' && (
        <div className="mt-4 p-3 rounded-md bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-200 flex items-center">
          <CheckCircle size={20} className="mr-2" />
          Pesan Anda telah berhasil terkirim. Kami akan segera menghubungi Anda.
        </div>
      )}
      {submitStatus === 'error' && (
        <div className="mt-4 p-3 rounded-md bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-200">
          Terjadi kesalahan saat mengirim pesan. Silakan coba lagi atau hubungi kami melalui email.
        </div>
      )}
    </form>
  );
};

export default ContactForm;
