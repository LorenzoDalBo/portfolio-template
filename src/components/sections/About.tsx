import { SectionWrapper, Card } from '../ui';
import { Users, Target, Award } from 'lucide-react';

const teamMembers = [
  {
    name: 'John Anderson',
    title: 'Chief Technology Officer',
    bio: '20+ years in enterprise IT infrastructure and cloud solutions',
    initials: 'JA',
  },
  {
    name: 'Sarah Chen',
    title: 'VP of Security',
    bio: 'Cybersecurity expert with experience in global security operations',
    initials: 'SC',
  },
  {
    name: 'Michael Rodriguez',
    title: 'Head of Solutions',
    bio: 'Digital transformation specialist focused on business innovation',
    initials: 'MR',
  },
  {
    name: 'Emily Watson',
    title: 'Director of Operations',
    bio: 'Operational excellence leader managing 24/7 support operations',
    initials: 'EW',
  },
];

const values = [
  {
    icon: Target,
    title: 'Customer Focus',
    description: 'We prioritize understanding and solving your unique business challenges',
  },
  {
    icon: Award,
    title: 'Excellence',
    description: 'Commitment to delivering high-quality solutions and outstanding service',
  },
  {
    icon: Users,
    title: 'Partnership',
    description: 'We work as an extension of your team to achieve shared goals',
  },
];

export function About() {
  return (
    <SectionWrapper
      id="about"
      title="About TechSolutions"
      subtitle="Trusted partner in IT transformation for over two decades"
      darker
    >
      <div className="space-y-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Story</h3>
            <p className="text-slate-600 mb-4 leading-relaxed">
              Founded in 2003, TechSolutions has been at the forefront of IT innovation, helping businesses
              navigate complex technology landscapes. What started as a small consulting firm has grown into a
              comprehensive IT solutions provider serving 500+ clients globally.
            </p>
            <p className="text-slate-600 mb-4 leading-relaxed">
              Our team of expert technologists is dedicated to delivering cutting-edge solutions that drive
              business growth, enhance security, and optimize operations. We combine deep technical expertise
              with business acumen to transform challenges into opportunities.
            </p>
            <div className="grid grid-cols-3 gap-6 pt-6">
              <div>
                <div className="text-3xl font-bold text-primary-600 mb-1">500+</div>
                <p className="text-sm text-slate-600">Active Clients</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary-600 mb-1">150+</div>
                <p className="text-sm text-slate-600">Team Members</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary-600 mb-1">50+</div>
                <p className="text-sm text-slate-600">Industry Awards</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-primary-600 to-primary-400 rounded-2xl p-12 text-white">
            <h3 className="text-2xl font-bold mb-6">Our Mission</h3>
            <p className="text-lg leading-relaxed mb-8 opacity-95">
              To empower organizations through innovative IT solutions that drive digital transformation,
              enhance security, and create sustainable business value.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="text-2xl">✓</div>
                <div>
                  <h4 className="font-semibold mb-1">Security First</h4>
                  <p className="text-sm opacity-90">Protecting your digital assets with enterprise-grade security</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="text-2xl">✓</div>
                <div>
                  <h4 className="font-semibold mb-1">Innovation Focused</h4>
                  <p className="text-sm opacity-90">Staying ahead of technology trends and market changes</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="text-2xl">✓</div>
                <div>
                  <h4 className="font-semibold mb-1">Customer Success</h4>
                  <p className="text-sm opacity-90">Your success is our success - we're invested in your growth</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-slate-900 mb-8">Our Values</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <Card key={index} className="text-center">
                  <div className="flex justify-center mb-4">
                    <div className="w-14 h-14 bg-primary-100 rounded-lg flex items-center justify-center">
                      <IconComponent className="w-7 h-7 text-primary-600" />
                    </div>
                  </div>
                  <h4 className="text-lg font-bold text-slate-900 mb-2">{value.title}</h4>
                  <p className="text-slate-600">{value.description}</p>
                </Card>
              );
            })}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-slate-900 mb-8">Leadership Team</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <Card key={index} className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white font-bold text-2xl">{member.initials}</span>
                </div>
                <h4 className="text-lg font-bold text-slate-900 mb-1">{member.name}</h4>
                <p className="text-primary-600 text-sm font-semibold mb-3">{member.title}</p>
                <p className="text-slate-600 text-sm">{member.bio}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
