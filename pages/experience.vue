<script setup lang="ts">
import {
  BuildingOfficeIcon,
  UsersIcon,
  NewspaperIcon,
  UserIcon,
  UserGroupIcon
} from "@heroicons/vue/24/outline"

const timeline = [
  {
    content: 'Applied to',
    target: 'Coding Labs work placement',
    description: 'This was handled via a partnership with Griffith University in my final trimester of university.',
    date: 'Aug 22',
    icon: BuildingOfficeIcon,
  },
  {
    content: '3 month placement',
    target: 'learning Laravel, Tailwind and Blade',
    description: 'First off we worked on an internal bootcamp course which took us over the basics of Laravel, Eloquent, and Blade. This had us working on a portfolio website which would be used in our work placement program at Griffith, where we would reflect on our experience here. Toward the end of the placement we worked on a new internal project which saw us getting thrown into Vue and learning on the spot. Vue would soon become my favourite to work with.',
    date: 'Sep 22',
    icon: UsersIcon,
  },
  {
    content: 'Offered',
    target: 'employment',
    description: 'Employment was offered on a 2-day basis, which soon became 4-day employment throughout 2023.',
    date: 'Nov 22',
    icon: NewspaperIcon,
  },
  {
    content: 'Full time hours & owner',
    target: 'of an internal project during Q4 2023',
    description: 'This was a big point, where I was moved to 5 days of work and entrusted on a project as its owner for Q4.',
    date: 'Oct 23',
    icon: UserIcon,
  },
  {
    content: 'Continued Development on',
    target: 'Internal Projects',
    description: '',
    date: 'Feb 24',
    icon: UserGroupIcon,
  }
]

useSeoMeta({
  title: 'Experience: Seth Sharp',
  description: 'Over my time in the industry I reflect on these experiences - to share to others about to go on their journey as developers.'
})
</script>

<template>
  <div>
    <div class="text-white max-w-fit">
      <HeadingsPage>
        My Experiences
      </HeadingsPage>
    </div>

    <BodyWrapper>
      <div class="leading-loose mt-12">
        <h1 class="text-2xl font-medium text-gray-400"> Bachelor of Computer Science (2020-2023) </h1>

        <p class="mt-3 text-gray-300">
          Straight after high school I went to Griffith University to study Computer Science, majoring in
          Software Development.
          Here is where I learnt a lot about algorithms, data structures and project structures. I dipped my
          toes in plenty
          of different areas such as AI, web development and general programming best practises and skills.
          GPA: 5.44
        </p>
      </div>
    </BodyWrapper>

    <BodyWrapper>
      <div class="leading-loose mt-12">
        <h1 class="text-2xl font-medium text-gray-400"> Coding Labs (2022-Present) </h1>

        <p class="mt-3 text-gray-300">
          Coding Labs is a Laravel agency based on the Gold Coast. I have been apart of this team for nearly 2
          years
          and have learn so much.
        </p>
      </div>
      <div class="flow-root mt-6 text-gray-300">
        <ul role="list" class="-mb-8">
          <li v-for="event in timeline" class="flex flex-col">
            <div class="relative flex space-x-3 my-2">
              <component :is="event.icon" class="size-8 p-0.5 rounded-md flex items-center justify-center" />

              <div class="md:flex min-w-0 flex-1 justify-between sm:space-x-4 pl-2">
                <div>
                  <p class="text-sm text-gray-200 pt-1">
                    {{ event.content }}
                    <span class="font-medium text-primary-400">
                      {{ event.target }}
                    </span>
                  </p>
                  <p class="text-sm mt-4 text-gray-400">{{ event?.description }}</p>
                </div>

                <div class="whitespace-nowrap text-right text-sm text-primary-600">
                  {{ event.date }}
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </BodyWrapper>
  </div>
</template>