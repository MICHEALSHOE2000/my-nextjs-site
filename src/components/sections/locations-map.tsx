import Image from 'next/image';

const locationsData = {
  WEST: ["California", "Colorado", "Idaho", "Montana", "Wyoming", "Nevada", "Oregon", "Utah", "Washington"],
  SOUTHWEST: ["Arizona", "Oklahoma", "New Mexico", "Texas"],
  MIDWEST: ["Illinois", "Indiana", "Iowa", "Kansas", "Michigan", "Minnesota", "Missouri", "Nebraska", "North Dakota", "Ohio", "Wisconsin", "South Dakota"],
  NORTHEAST: ["Connecticut", "Delaware", "Maine", "Maryland", "Massachusetts", "New Hampshire", "New Jersey", "New York", "Pennsylvania", "Rhode Island", "Vermont"],
  SOUTHEAST: ["Alabama", "Arkansas", "Florida", "Georgia", "Kentucky", "Louisiana", "Mississippi", "North Carolina", "South Carolina", "Tennessee", "Virginia", "West Virginia"],
};

const regionOrder: (keyof typeof locationsData)[] = ["WEST", "SOUTHWEST", "MIDWEST", "NORTHEAST", "SOUTHEAST"];

const LocationsMap = () => {
  return (
    <section className="bg-gradient-to-b from-background to-gray-50/50 text-foreground py-20 sm:py-24">
      <div className="container mx-auto px-5">
        <div className="flex justify-center mb-16 animate-fade-in">
          <div className="flex items-center bg-white/80 backdrop-blur-sm border border-gray-200 rounded-2xl p-6 shadow-lg">
            <div className="bg-gradient-to-br from-primary to-green-600 rounded-full p-4 mr-6 flex-shrink-0 shadow-md">
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/fcc87ae0-ed43-4816-9531-46e7e1bafe5d-puppyspot-com/assets/svgs/map-10.svg?"
                alt="United States Map Icon"
                width={32}
                height={32}
                className="w-8 h-8 text-white"
              />
            </div>
            <div className="text-left">
              <h2 className="font-display text-3xl font-bold text-foreground">
                Puppies for sale everywhere
              </h2>
              <p className="mt-2 text-base text-muted-foreground font-body">
                See all the US locations for{' '}
                <a href="https://www.puppyspot.com/puppies-for-sale" className="text-primary font-medium underline hover:no-underline transition-colors">
                  puppies for sale
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-8 gap-y-12 animate-slide-up">
          {regionOrder.map((regionName, regionIndex) => (
            <div key={regionName} className="animate-fade-in" style={{ animationDelay: `${regionIndex * 100}ms` }}>
              <div className="bg-white/60 backdrop-blur-sm border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:bg-white/80 transition-all duration-300">
                <h3 className="mb-6 font-display text-xs font-bold uppercase tracking-[0.15em] text-primary border-b border-primary/20 pb-2">
                  {regionName}
                </h3>
                <ul className="space-y-3">
                  {locationsData[regionName].map((state, index) => (
                    <li key={state}>
                      <a 
                        href="#" 
                        className="font-body text-sm text-muted-foreground hover:text-primary transition-colors duration-200 block py-1 hover:bg-green-50 rounded px-2 -mx-2"
                      >
                        {state}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LocationsMap;