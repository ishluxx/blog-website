import { WrenchScrewdriverIcon,HashtagIcon,EyeIcon,CurrencyDollarIcon, VideoCameraIcon,NewspaperIcon, UserGroupIcon, LockClosedIcon } from '@heroicons/react/24/outline'

const features = [
  {
    name: 'news',
    description:
    'In addition to all these, we also do publish important tech news around the globe. If we find any of the new stuff very important, and you should be aware of them, we will publish it right away on takesolu. So, you will be no longer outdated with the outer world.',
    icon: NewspaperIcon,
  },
  {
    name: 'Guides',
    description:
    'Various guides laid in many categories including Android, iOS, Windows, Mac, Linux, WordPress Blogging, SEO, etc. explained in an easily understandable manner.',
    icon: EyeIcon,
  },
  {
    name: 'Top trand',
    description:
    'Everyone loves the words ‘Top 5’ or ‘Top 10’  because they are the simplest way to find the best dominators in any field. If you are a regular internet user, you can understand what we mean. As you see in many other Top List websites, we also provide this on a regular basis.',
    icon: HashtagIcon,
  },
  {
    name: 'Troubleshoot',
    description:
      'Quisque est vel vulputate cursus. Risus proin diam nunc commodo. Lobortis auctor congue commodo diam neque.',
    icon: WrenchScrewdriverIcon,
  },
  {
    name: 'A Community',
    description:
     'We are currently working on building a forum for our readers where they will be able to share their ideas and get answers to their questions. Instead of sending all your doubts directly to us, it is far better to share them with a community of brilliant people all around the globe. We may not be able to reply to all your emails on busy days. So, a separate forum will be a good idea. As mentioned, we are currently working on it and once it is ready, we will notify you.',
    icon:UserGroupIcon ,
  },
  {
    name: 'Sponsored content',
    description:
      'There are thousands or even more developers struggling to get proper user attention to their applications. There are also numerous product owners who never felt the joy of selling thousands of pieces online. There are a lot of tech things happening all around the globe without getting the eyeballs of billions of internet users. So, we just provide a platform for such people or organizations to reach out to our readers. For more info, visit our Advertise page.',
    icon: CurrencyDollarIcon,
  },
]

export default function Example() {
  return (
    <div className="bg-white py-4 sm:py-22">
      <div className="mx-auto max-w-7xl px-2 md:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl lg:text-center">
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          About 
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
          Welcome to takesolu – A website made to help users to get ease in their day-to-day technology life.
           Thinking about a routine without smartphones and computers became a nightmare because all of those tiny 
           electronics made our lives easier than ever before. Making a call or chatting with friends is no more difficult
            using these handy pieces of electronic items. However, it is a fact that there are still some people who are unaware
             of the functions of these devices and need guidance in using them for specific operations.
         That’s why we created takesolu to help them out with almost anything related to technology.
          We will be guiding you through the procedures required to complete a specific operation, will publish genuine Reviews of your favorite products, will upload tutorial videos for you, and almost anything you expect from a complete technology website. No matter how old are you or in which job you are involved. If you are passionate about technology and tech stuff, you will love us to guide you throughout the tech journey.
          </p>
        </div>
        <div className="mx-auto mt-9 max-w-2xl lg:text-center">
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          What you will find in takesolu
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-3xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600">
                    <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      <div className="mx-auto max-w-7xl mt-5 px-6 lg:px-8">
        <div className="mx-auto max-w-4xl lg:text-center">
          <p className="mt-2 text-3xl font-bold  tracking-tight text-gray-900 sm:text-4xl">
          What we aim with takesolu
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
          As mentioned already, Tech Quintal will be your final destination for any kind of
           technology needs whether it is a guide, review, or anything else. We want to provide 
           100% satisfying information to our readers. We will never provide misleading or
            irrelevant content to our readers without adding sufficient value. Even if we
             accept advertisements and sponsored articles, we will always try to publish them 
             in a user-friendly manner. So no ads or sponsored content will mislead our readers 
             in any manner. Our goal is to join thousands or millions of good websites all around the 
             internet to build a better informative tomorrow.
          </p>
          <p className="mt-2 text-3xl font-bold  tracking-tight text-gray-900 sm:text-4xl">
          A little background
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
          After setting up numerous blogs on various niches, our team thought of creating something 
          unique that differs from any other websites out there. Instead of just writing to earn some money,
           we’ve decided to provide something useful to the readers and to earn their love. So far, we’ve 
           seen so many websites that publish random content without adding sufficient value. Even if it is
            for their little earnings, it has a huge role in misleading readers to the wrong destination and 
            other kinds of unuseful websites.
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">So, we thought of trying to make at least a small change to this
             by putting forward a useful website with unique valuable information. Even if we can’t make a complete wipeout
              of such bad content, we will be at least driving some visitors to the resourceful pages on our website.
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
            As mentioned in our aims section, we will be completely relying on visitors without giving importance to 
            the earnings. But yes, we do put some affiliate links and paid banners aside for the website maintenance costs. 
            But only without affecting the user experience at all. If you have further queries regarding our website, 
            feel free to drop a message from our Contact Us page. We will be always happy to reply to your messages. 
            Keep supporting us by visiting the website more often, only if you think, the website is worth a second visit. 
            We hope for the best.
          </p>
        </div>
        </div>
      </div>
    </div>
  )
}
