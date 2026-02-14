import { Truck, Shield, Headphones } from 'lucide-react';

export function Features() {
  const features = [
    {
      icon: Truck,
      title: 'Free Shipping',
      description: 'Enjoy free shipping on all orders. Fast and reliable delivery to your doorstep.',
    },
    {
      icon: Shield,
      title: 'Premium Quality',
      description: 'Handpicked teas from the finest gardens, ensuring exceptional taste and aroma.',
    },
    {
      icon: Headphones,
      title: '24/7 Support',
      description: 'Our dedicated team is always ready to help you with any queries.',
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container">
        {/* Feature Cards - 3 columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                  <div key={index} className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
                    {/* Icon */}
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-100 text-primary-500 mb-4">
                      <Icon size={32} />
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {feature.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
              );
            })}
        </div>
      </div>
    </section>
  );
}
