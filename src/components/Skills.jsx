import { motion } from "framer-motion";

const skills = [
  {
    category: "Frontend",
    items: [
      { name: "HTML", level: 90 },
      { name: "React", level: 90 },
      { name: "JavaScript", level: 90 },
      { name: "TypeScript", level: 50 },
      { name: "Tailwind CSS", level: 90 },
      { name: "Next.js", level: 50 },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", level: 60 },
      { name: "Express", level: 60 },
      { name: "MongoDB", level: 65 },
      { name: "PostgreSQL", level: 30 },
    ],
  },
  {
    category: "Tools",
    items: [
      { name: "Git", level: 55 },
      { name: "Docker", level: 25 },
      { name: "VS Code", level: 90 },
      { name: "Figma", level: 65 },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900">Skills</h2>
          <div className="mt-2 h-1 w-20 bg-blue-600 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skills.map((category, index) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-6">
                {category.category}
              </h3>
              <div className="space-y-4">
                {category.items.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-700">{skill.name}</span>
                      <span className="text-gray-600">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="bg-blue-600 h-2 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
