import { SectionWrapper, Card } from '../ui';
import {
  HardDrive,
  Cloud,
  Shield,
  Network,
  Lightbulb,
  RotateCcw,
  Code,
  AlertCircle,
} from 'lucide-react';

const services = [
  {
    icon: HardDrive,
    title: 'Hardware Maintenance',
    description:
      'Preventive maintenance and repair services for servers, workstations, and network equipment to minimize downtime.',
  },
  {
    icon: Cloud,
    title: 'Cloud Solutions',
    description:
      'Migrate and manage your applications on scalable cloud infrastructure with cost optimization and security.',
  },
  {
    icon: Shield,
    title: 'Cybersecurity',
    description:
      'Comprehensive security solutions including threat detection, penetration testing, and compliance management.',
  },
  {
    icon: Network,
    title: 'Network Infrastructure',
    description:
      'Design, implementation, and optimization of robust network systems for enterprise-level performance.',
  },
  {
    icon: Lightbulb,
    title: 'IT Consulting',
    description:
      'Strategic technology consulting to align your IT infrastructure with business goals and digital transformation.',
  },
  {
    icon: RotateCcw,
    title: 'Data Backup & Recovery',
    description:
      'Secure data backup solutions and disaster recovery planning to protect your critical business information.',
  },
  {
    icon: Code,
    title: 'Software Development',
    description:
      'Custom software development and legacy system modernization tailored to your specific business needs.',
  },
  {
    icon: AlertCircle,
    title: '24/7 Support',
    description:
      'Round-the-clock technical support and monitoring to ensure your systems operate smoothly without interruption.',
  },
];

export function Services() {
  return (
    <SectionWrapper
      id="services"
      title="Our IT Services"
      subtitle="Comprehensive technology solutions designed to drive your business forward"
      darker
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service, index) => {
          const IconComponent = service.icon;
          return (
            <Card
              key={index}
              hover
              className="text-center"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-primary-100 rounded-lg flex items-center justify-center">
                  <IconComponent className="w-8 h-8 text-primary-600" />
                </div>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">{service.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{service.description}</p>
            </Card>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
