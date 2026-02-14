import { MapPin, Award, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/swiper-bundle.css';

export function CompanyFeatures() {
  const features = [
    {
      icon: Award,
      title: 'Premium Quality',
      description: 'Premium quality Assam teas directly from gardens',
    },
    {
      icon: ShieldCheck,
      title: '20+ Years',
      description: 'Registered and certified tea company',
    },
    {
      icon: MapPin,
      title: 'Wide Spread',
      description: 'Serving across Mahbubnagar district and beyond',
    },
  ];

  return (
    <section className="pb-12 bg-white">
      <div className="container">
        {/* Mobile Carousel */}
        <div className="md:hidden">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={16}
            slidesPerView={1}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            loop={true}
            className="pb-12"
          >
            {features.map((feature, index) => (
              <SwiperSlide key={index}>
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  className="bg-gray-50 rounded-lg p-6"
                >
                  <feature.icon size={48} className="text-primary-500 mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">
                    {feature.description}
                  </p>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="bg-gray-50 rounded-lg p-6"
            >
              <feature.icon size={48} className="text-primary-500 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
