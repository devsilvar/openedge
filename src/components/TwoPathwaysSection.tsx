import React from 'react';
import { ArrowRight, Building2, Users } from 'lucide-react';
import { Link } from 'react-router';

export default function TwoPathwaysSection() {
  return (
    <section className="bg-gradient-to-b from-white to-gray-50 py-12 sm:py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
            Choose Your Path
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-4">
            Whether you own a hospitality business or work in one, we have a solution for you
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          <PathwayCard
            icon={<Building2 className="w-12 h-12" />}
            title="Business Owners"
            description="Get a complete diagnostic of your business. We will identify system failures and create a roadmap to profitability."
            benefits={[
              'Comprehensive Health Check',
              'Revenue and Operations Analysis',
              'Custom Action Plan',
              'System Implementation Support'
            ]}
            ctaText="Book Health Check"
            ctaLink="/book-health-check"
            accent="blue"
          />

          <PathwayCard
            icon={<Users className="w-12 h-12" />}
            title="Hospitality Operators"
            description="Join our intensive training program. Learn to build systems, lead teams, and run profitable operations."
            benefits={[
              '90-Day Training Program',
              'Hands-On Experience',
              'Career Advancement',
              'Industry Certification'
            ]}
            ctaText="Join Training"
            ctaLink="/training"
            accent="green"
          />
        </div>
      </div>
    </section>
  );
}

interface PathwayCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  benefits: string[];
  ctaText: string;
  ctaLink: string;
  accent: 'blue' | 'green';
}

function PathwayCard({ icon, title, description, benefits, ctaText, ctaLink, accent }: PathwayCardProps) {
  const accentColors = {
    blue: 'bg-blue-600 hover:bg-blue-700',
    green: 'bg-green-600 hover:bg-green-700'
  };

  const iconBgColors = {
    blue: 'bg-blue-50 text-blue-600',
    green: 'bg-green-50 text-green-600'
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 hover:shadow-2xl transition-all duration-300 border-2 border-gray-100 hover:-translate-y-1">
      <div className={`inline-flex p-3 sm:p-4 rounded-xl ${iconBgColors[accent]} mb-4 sm:mb-6`}>
        {icon}
      </div>
      
      <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 text-base sm:text-lg mb-6 leading-relaxed">{description}</p>
      
      <ul className="space-y-3 mb-8">
        {benefits.map((benefit: string, index: number) => (
          <li key={index} className="flex items-start gap-3">
            <span className="text-green-500 mt-1 text-xl font-bold">✓</span>
            <span className="text-gray-700 text-base">{benefit}</span>
          </li>
        ))}
      </ul>

      <Link to={ctaLink} className="block">
        <button className={`w-full ${accentColors[accent]} text-white font-bold py-4 sm:py-5 px-6 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl text-base sm:text-lg`}>
          {ctaText}
          <ArrowRight className="w-5 h-5" />
        </button>
      </Link>
    </div>
  );
}
