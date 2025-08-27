import React from 'react';

const AboutText = () => {
  return (
    <section className="bg-gradient-to-b from-background via-green-50/30 to-background py-20">
      <div className="container py-8">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              About PuppySpot
            </div>
            <h2 className="text-3xl font-bold text-foreground font-display mb-6">
              Why Choose PuppySpot?
            </h2>
          </div>
          <div className="space-y-6 animate-slide-up">
            <div className="bg-white/70 backdrop-blur-sm border border-green-100 rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300">
              <p className="text-base text-foreground leading-relaxed font-body">
                At PuppySpot, we have the widest selection of puppies for sale on the internet. Whether you're looking for a purebred Australian Shepherd, a hypoallergenic Mini Poodle, a dashing designer breed like the Goldendoodle or the Cavapoo, or the ever-popular Golden Retriever, we've got what you're looking for. Our exclusive network of breeders is second to none, which is why every puppy provided through us is backed by our industry-leading <strong className="text-primary">10-year health commitment.</strong>
              </p>
            </div>
            <div className="bg-white/70 backdrop-blur-sm border border-green-100 rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300">
              <p className="text-base text-foreground leading-relaxed font-body">
                We have spent over twenty years sourcing the highest quality breeders from all around the country. From the Miniature Poodle to the Great Dane, each puppy comes with a special <strong className="text-primary">AKC registration package</strong> provided through PuppySpot. We want you to feel secure in your purchase, knowing your breeder only utilizes the most responsible, sustainable breeding practices.
              </p>
            </div>
            <div className="bg-white/70 backdrop-blur-sm border border-green-100 rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300">
              <p className="text-base text-foreground leading-relaxed font-body">
                We're excited to be there with you on your journey, whether you're a new pet parent welcoming your first Goldendoodle into the family, or you're a seasoned pro adding your fourth Siberian Husky to the pack. We all treat our dogs like family around here, which is why we will always go the extra mile to help you find the puppy you will love from the moment they're delivered to your door.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutText;