import { SectionWrapper, Button, Card } from '../ui';
import { CheckCircle, ArrowRight } from 'lucide-react';

const solutions = [
  {
    title: 'Enterprise Cloud Platform',
    description:
      'Scalable cloud infrastructure for enterprises requiring high availability, security, and compliance.',
    features: ['99.99% Uptime SLA', 'Multi-region deployment', 'Advanced security controls', 'Cost optimization'],
  },
  {
    title: 'Unified Security Suite',
    description:
      'Integrated security platform protecting your entire IT ecosystem from threats and vulnerabilities.',
    features: ['Real-time threat detection', 'Advanced endpoint protection', 'Compliance automation', 'Incident response'],
  },
  {
    title: 'Digital Transformation Platform',
    description:
      'Modernize legacy systems and accelerate digital innovation with our comprehensive transformation suite.',
    features: ['Application modernization', 'Process automation', 'Data analytics & AI', 'Change management support'],
  },
  {
    title: 'Managed IT Services',
    description:
      'Fully managed IT operations allowing you to focus on business growth while we handle technology.',
    features: ['24/7 monitoring & support', 'Proactive maintenance', 'Performance optimization', 'Strategic planning'],
  },
];

export function Solutions() {
  return (
    <SectionWrapper
      id="solutions"
      title="Technology Solutions"
      subtitle="End-to-end solutions for your most complex IT challenges"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {solutions.map((solution, index) => (
          <Card key={index} className="flex flex-col h-full">
            <div className="mb-4">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <div className="w-6 h-6 rounded-full bg-gradient-to-br from-primary-600 to-primary-400"></div>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">{solution.title}</h3>
              <p className="text-slate-600 mb-6">{solution.description}</p>
            </div>

            <div className="space-y-3 mb-6 flex-grow">
              {solution.features.map((feature, featureIndex) => (
                <div key={featureIndex} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">{feature}</span>
                </div>
              ))}
            </div>

            <Button variant="outline" size="sm">
              Learn More <ArrowRight className="w-4 h-4" />
            </Button>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  );
}
