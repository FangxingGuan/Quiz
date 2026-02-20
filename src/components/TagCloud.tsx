const tagLabels: Record<string, string> = {
  tech: 'Tech Geek 💻',
  food: 'Foodie Hunter 🍜',
  politics: 'Political Analyst 📢',
  sports: 'Sports Fan ⚽',
  entertainment: 'Entertainment Buff 🎬',
  fashion: 'Fashion Icon 👗',
  travel: 'Globe Trotter ✈️',
  science: 'Science Nerd 🔬',
  finance: 'Finance Guru 💰',
  gaming: 'Gamer Pro 🎮',
  fitness: 'Fitness Warrior 💪',
  photography: 'Visual Storyteller 📸',
}

const colors = [
  'bg-violet-100 text-violet-700',
  'bg-blue-100 text-blue-700',
  'bg-pink-100 text-pink-700',
  'bg-cyan-100 text-cyan-700',
  'bg-amber-100 text-amber-700',
  'bg-emerald-100 text-emerald-700',
]

interface TagCloudProps {
  tags: string[]
}

export default function TagCloud({ tags }: TagCloudProps) {
  return (
    <div className="flex flex-wrap gap-2 justify-center">
      {tags.map((tag, i) => (
        <span
          key={tag}
          className={`px-4 py-2 rounded-full text-sm font-semibold ${colors[i % colors.length]}`}
        >
          {tagLabels[tag] ?? tag}
        </span>
      ))}
    </div>
  )
}
