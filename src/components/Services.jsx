// components/Services.jsx
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { CodeBracketIcon, CloudIcon, WrenchScrewdriverIcon } from '@heroicons/react/24/outline';

const services = [
  {
    id: 1,
    icon: CodeBracketIcon,
    title: "Custom Software Development",
    description: "We build bespoke software applications that address specific business challenges and drive efficiency."
  },
  {
    id: 2,
    icon: CloudIcon,
    title: "Cloud Solutions",
    description: "We help businesses migrate to the cloud, manage their cloud infrastructure, and optimize cloud performance."
  },
  {
    id: 3,
    icon: WrenchScrewdriverIcon,
    title: "IT Consulting",
    description: "Our expert consultants provide strategic guidance and support to help businesses leverage technology effectively."
  }
];

const Services = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="py-16 bg-white px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">Our Core Services</h2>
          <p className="text-xl text-gray-800">We offer a range of services tailored to meet the unique needs of each client.</p>
          {/* <div className="w-24 h-1 bg-blue-500 mx-auto mb-8"></div> */}
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="bg-blue-200 rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 group"
            >
              <div className="bg-blue-600 w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-500 transition-colors">
                <service.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;