import { motion } from 'motion/react';
import { Award, Trophy, FileText, Star } from 'lucide-react';
import { Card, CardContent } from './ui/card';

const achievements = [
  {
    icon: Star,
    title: 'Reliance Foundation Scholar',
    description: 'Prestigious scholarship recipient for academic excellence and leadership potential',
    category: 'Scholarship',
    color: 'from-yellow-400 to-orange-500'
  },
  {
    icon: Trophy,
    title: 'Hackaway 2025 - 2nd Place',
    description: 'Secured second position in competitive hackathon with innovative tech solution',
    category: 'Competition',
    color: 'from-blue-500 to-purple-600'
  },
  {
    icon: Trophy,
    title: 'IBM TechXchange - 5th Rank',
    description: 'Top performer in IBM technical challenge showcasing cloud and AI expertise',
    category: 'Competition',
    color: 'from-green-500 to-teal-600'
  },
  {
    icon: FileText,
    title: 'ISRO Certification',
    description: 'Certified in space technology and satellite systems from Indian Space Research Organisation',
    category: 'Certification',
    color: 'from-indigo-500 to-blue-600'
  },
  {
    icon: FileText,
    title: 'Docker & Kubernetes',
    description: 'Professional certification in containerization and orchestration technologies',
    category: 'Certification',
    color: 'from-cyan-500 to-blue-500'
  },
  {
    icon: Award,
    title: 'Academic Excellence',
    description: 'Consistent high academic performance throughout B.Tech program',
    category: 'Academic',
    color: 'from-purple-500 to-pink-600'
  }
];

export function AchievementsSection() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl mb-6 text-gray-900">Achievements & Certifications</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Recognition of excellence in technology, innovation, and academic pursuits
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
                <CardContent className="p-6 text-center">
                  <div className="mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-br ${achievement.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <achievement.icon className="w-8 h-8 text-white" />
                    </div>
                    <span className="inline-block px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm mb-3">
                      {achievement.category}
                    </span>
                    <h3 className="text-lg text-gray-900 mb-3">
                      {achievement.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    {achievement.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}