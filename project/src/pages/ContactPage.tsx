import React, { useState } from 'react';
import { Send, Mail, Phone, MapPin } from 'lucide-react';
import Card, { CardHeader, CardTitle, CardContent } from '../components/ui/Card';
import Button from '../components/ui/Button';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const initialFormData: FormData = {
  name: '',
  email: '',
  subject: '',
  message: ''
};

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    // Clear error when user types
    if (errors[name as keyof FormData]) {
      setErrors({
        ...errors,
        [name]: undefined
      });
    }
  };

  const validate = (): boolean => {
    const newErrors: Partial<FormData> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validate()) {
      setIsSubmitting(true);
      
      // Simulate form submission
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSubmitted(true);
        setFormData(initialFormData);
      }, 1500);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-5xl mx-auto">
        <div className="mb-8">
          <h1 className="text-2xl md:text-3xl font-heading font-bold text-gray-800 dark:text-white mb-2">
            Contact Us
          </h1>
          <p className="text-gray-600 dark:text-gray-300">
            Have questions or feedback? Get in touch with our team.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="md:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <Mail className="h-5 w-5 text-primary-600 dark:text-primary-400 mr-3 mt-0.5" />
                    <div>
                      <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Email
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        contact@smartstudybuddy.com
                      </p>
                      <p className="text-gray-600 dark:text-gray-400">
                        support@smartstudybuddy.com
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Phone className="h-5 w-5 text-primary-600 dark:text-primary-400 mr-3 mt-0.5" />
                    <div>
                      <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Phone
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        +91 8989864478
                      </p>
                      <p className="text-gray-600 dark:text-gray-400">
                        +91 98769872354
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 text-primary-600 dark:text-primary-400 mr-3 mt-0.5" />
                    <div>
                      <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Address
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        Oriental Institute of Science and Technology 
                      </p>
                      <p className="text-gray-600 dark:text-gray-400">
                        Bhopal, Madhya Pradesh, India - 462033
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                    Working Hours
                  </h3>
                  <div className="space-y-2">
                    <div className="flex justify-between text-gray-600 dark:text-gray-400 text-sm">
                      <span>Monday - Friday</span>
                      <span>9:00 AM - 5:00 PM</span>
                    </div>
                  
                    <div className="flex justify-between text-gray-600 dark:text-gray-400 text-sm">
                      <span>Saturday - Sunday</span>
                      <span>Closed</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="md:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Send us a message</CardTitle>
              </CardHeader>
              <CardContent>
                {isSubmitted ? (
                  <div className="text-center py-8">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 mb-4">
                      <Send className="h-8 w-8" />
                    </div>
                    <h3 className="text-xl font-medium text-gray-800 dark:text-white mb-2">
                      Message Sent!
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-6">
                      Thank you for contacting us. We'll get back to you as soon as possible.
                    </p>
                    <Button 
                      variant="outline" 
                      onClick={() => setIsSubmitted(false)}
                    >
                      Send Another Message
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label 
                          htmlFor="name" 
                          className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                        >
                          Full Name
                        </label>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          value={formData.name}
                          onChange={handleChange}
                          className={`w-full rounded-md border ${
                            errors.name 
                              ? 'border-red-300 dark:border-red-700 focus:ring-red-500' 
                              : 'border-gray-300 dark:border-gray-700 focus:ring-primary-500'
                          } bg-white dark:bg-gray-800 p-2 text-gray-900 dark:text-white focus:ring-2 focus:border-transparent`}
                        />
                        {errors.name && (
                          <p className="mt-1 text-sm text-red-500">{errors.name}</p>
                        )}
                      </div>
                      
                      <div>
                        <label 
                          htmlFor="email" 
                          className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                        >
                          Email Address
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          className={`w-full rounded-md border ${
                            errors.email 
                              ? 'border-red-300 dark:border-red-700 focus:ring-red-500' 
                              : 'border-gray-300 dark:border-gray-700 focus:ring-primary-500'
                          } bg-white dark:bg-gray-800 p-2 text-gray-900 dark:text-white focus:ring-2 focus:border-transparent`}
                        />
                        {errors.email && (
                          <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                        )}
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <label 
                        htmlFor="subject" 
                        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                      >
                        Subject
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className={`w-full rounded-md border ${
                          errors.subject 
                            ? 'border-red-300 dark:border-red-700 focus:ring-red-500' 
                            : 'border-gray-300 dark:border-gray-700 focus:ring-primary-500'
                        } bg-white dark:bg-gray-800 p-2 text-gray-900 dark:text-white focus:ring-2 focus:border-transparent`}
                      >
                        <option value="">Select Subject</option>
                        <option value="General Inquiry">General Inquiry</option>
                        <option value="Technical Support">Technical Support</option>
                        <option value="Feedback">Feedback</option>
                        <option value="Other">Other</option>
                      </select>
                      {errors.subject && (
                        <p className="mt-1 text-sm text-red-500">{errors.subject}</p>
                      )}
                    </div>
                    
                    <div className="mb-6">
                      <label 
                        htmlFor="message" 
                        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        className={`w-full rounded-md border ${
                          errors.message 
                            ? 'border-red-300 dark:border-red-700 focus:ring-red-500' 
                            : 'border-gray-300 dark:border-gray-700 focus:ring-primary-500'
                        } bg-white dark:bg-gray-800 p-2 text-gray-900 dark:text-white focus:ring-2 focus:border-transparent`}
                      />
                      {errors.message && (
                        <p className="mt-1 text-sm text-red-500">{errors.message}</p>
                      )}
                    </div>
                    
                    <div>
                      <Button 
                        type="submit" 
                        rightIcon={<Send size={16} />}
                        isLoading={isSubmitting}
                      >
                        Send Message
                      </Button>
                    </div>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;