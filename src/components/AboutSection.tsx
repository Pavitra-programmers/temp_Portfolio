import { motion } from 'motion/react';

export function AboutSection() {
  return (
    <section id="about" className="py-32 px-8 bg-background">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.6, 0.01, 0.05, 0.95] }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-20"
        >
          <h2 className="text-4xl md:text-6xl text-foreground tracking-tight leading-tight mb-12">
            About
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-20">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.6, 0.01, 0.05, 0.95] }}
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-8"
          >
            <p className="text-lg text-muted-foreground leading-relaxed tracking-wide">
              I'm a passionate developer and machine learning enthusiast currently pursuing 
              B.Tech in Computer Science and Engineering. I specialize in building intelligent 
              systems that bridge cutting-edge technology with real-world applications.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed tracking-wide">
              My expertise spans web development, artificial intelligence, cloud technologies, 
              and cybersecurity. I enjoy tackling complex challenges and creating innovative 
              solutions that make a meaningful impact.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed tracking-wide">
              As a Reliance Foundation Scholar and hackathon winner, I'm always eager to 
              explore new technologies and contribute to projects that push the boundaries 
              of what's possible.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.6, 0.01, 0.05, 0.95] }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h3 className="text-2xl text-foreground tracking-tight mb-8">Expertise</h3>
            <div className="space-y-4">
              {[
                'Machine Learning & AI',
                'Web Development',
                'Cloud Technologies',
                'Cybersecurity',
                'Data Science',
                'DevOps & Automation'
              ].map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 + (index * 0.1), ease: [0.6, 0.01, 0.05, 0.95] }}
                  viewport={{ once: true }}
                  className="flex items-center group"
                >
                  <div className="w-2 h-2 bg-foreground rounded-full mr-4 group-hover:scale-125 transition-transform duration-300" />
                  <span className="text-muted-foreground tracking-wide group-hover:text-foreground transition-colors duration-300">
                    {skill}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}