"use client";

import * as React from "react";
import { useState } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Search, Filter, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";

const genderOptions = ["Male", "Female", "All"];

const breedOptions = [
  "All Breeds", "Goldendoodle", "Bernedoodle", "Cavapoo", "Golden Retriever", "Maltipoo", "Poodle", "Dachshund", "Cavalier King Charles Spaniel", "French Bulldog", "Labrador Retriever", "Yorkshire Terrier", "German Shepherd Dog", "Shih Tzu", "Havanese", "Miniature Schnauzer", "Maltese", "Cocker Spaniel", "Pomeranian", "Cockapoo", "Siberian Husky", "Bernese Mountain Dog", "Labradoodle", "Chihuahua", "Bichon Frise", "Pembroke Welsh Corgi", "Yorkiepoo", "Great Dane", "Coton de Tulear", "Beagle", "Boston Terrier", "Morkie", "Havapoo", "Aussiedoodle", "Boxer", "Australian Shepherd", "Sheepadoodle", "Pomsky", "Shih-Poo", "Bulldog", "Doberman Pinscher", "Rottweiler", "Bichonpoo", "Pug", "Shiba Inu", "West Highland White Terrier", "Schnoodle", "Cavachon", "Miniature Pinscher", "Soft Coated Wheaten Terrier", "Frenchton", "Basset Hound", "Whoodle", "Shichon", "Saint Berdoodle", "Havachon", "Pomapoo", "American Corgi", "Papillon", "Pekingese", "Jack Russell Terrier", "Newfoundland", "Miniature American Shepherd", "Silky Terrier", "Maltipom", "Dalmatian", "Cane Corso", "Mal-Shi", "Corgipoo", "Keeshond", "Cava-Tzu", "Aussalier", "Puggle", "Irish Doodle", "Golden Mountain Doodle", "Vizsla", "Border Collie", "Cava-Corgi", "Australian Mountain Doodle", "Chinese Shar-Pei"
];

const characteristicsOptions = [
  "Top Active Dog Breeds", "Best Apartment Dogs", "Best Family Dogs", "Teacup Puppies", "Allergy Friendly Dogs", "Doodle Puppies"
];

const ageOptions = [
  "Any age", "Up to 8 weeks", "Up to 12 weeks", "Up to 16 weeks", "Older than 16 weeks"
];

const colorOptions = [
"Apricot","Apricot & White","Bi-Color","Black","Black & Cream","Black & Gold","Black & Mahogany","Black & Rust","Black & Silver","Black & Tan","Black & White","Black and White Piebald","Black Brindle","Black Brindle & White","Black Sabled Fawn","Black, Gold & White","Black, Rust & White","Black, Tan & White","Black, White & Tan","Blenheim","Blue","Blue & Tan","Blue & White","Blue Brindle","Blue Brindle & White","Blue Fawn","Blue Harlequin","Blue Mantle","Blue Merle","Blue Merle & Gold","Blue Merle & Tan","Blue Merle & White","Blue Merle, White & Tan","Blue Sable","Blue, Tan & White","Brindle","Brindle & White","Brown","Brown & Tan","Brown & White","Brown, Black Overlay","Brown, Tan & White","Brown, White & Tan","Buff","Buff & White","Charcoal","Chocolate","Chocolate & Cream","Chocolate & Tan","Chocolate & White","Chocolate Brindle","Chocolate Dapple","Chocolate Harlequin","Chocolate Merle","Chocolate Merle & Tan","Chocolate Merle & White","Chocolate Sable","Chocolate, Tan & White","Chocolate, White & Tan","Cream","Cream & White","Cream Sable","Dark Golden","English Cream","Fawn","Fawn (Isabella) Cream","Fawn (Isabella) & Tan","Fawn & White","Fawn Brindled Black","Fawn Merle","Fawn Sable","Fawnequin","Flashy Brindle","Flashy Fawn","Fox Red","Gold","Gold & White","Gold Brindle","Gold Sable","Golden","Gray","Gray & White","Gray, Cream & Black","Gray, Silver & Black","Isabella & Tan","Lavender & Tan","Light Golden","Lilac","Lilac & Tan","Liver","Liver & Tan","Liver & White","Liver Merle","Mantle Merle","Merle","Orange","Orange Sable","Red","Red & Rust","Red & White","Red Dapple","Red Fawn","Red Merle","Red Sable","Red Sesame","Ruby","Sable","Sable & White","Sable Merle","Sable Merle & White","Salt & Pepper","Silver","Silver & White","Silver Dapple","Tri-Colored","Wheaten","White","White & Black","White & Buff","White & Cream","White & Gray","White & Lemon","White & Sable","White & Yellow","White, Black & Tan","Wolf Sable","Yellow"
];

const travelOptions = ["All Puppies", "Ready To Travel Now"];

const FilterSidebar = () => {
    const [breedSearch, setBreedSearch] = useState("");

    const filteredBreeds = breedSearch
        ? breedOptions.filter(breed =>
            breed.toLowerCase().includes(breedSearch.toLowerCase())
          )
        : breedOptions;

    return (
        <aside className="w-full max-w-[290px] bg-white border border-gray-200 rounded-xl p-6 space-y-6 hidden lg:block font-body shadow-sm hover:shadow-md transition-shadow smooth-transition">
            <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                    <Filter size={18} className="text-primary" />
                    <h3 className="font-display text-lg font-semibold text-foreground">Filters</h3>
                </div>
                <Button variant="ghost" size="sm" className="text-sm text-muted-foreground hover:text-primary">
                    <RotateCcw size={14} className="mr-1" />
                    Reset
                </Button>
            </div>

            <Accordion type="multiple" defaultValue={['gender', 'breed']} className="w-full">
                <AccordionItem value="gender" className="border-b border-gray-100">
                    <AccordionTrigger className="text-base font-medium text-foreground hover:no-underline py-4 hover:text-primary transition-colors">
                        Gender
                    </AccordionTrigger>
                    <AccordionContent className="pt-2 pb-4">
                        <RadioGroup defaultValue="all" className="space-y-3">
                            {genderOptions.map((option) => (
                                <div key={option} className="flex items-center space-x-3 group">
                                    <RadioGroupItem 
                                        value={option.toLowerCase()} 
                                        id={`gender-${option.toLowerCase()}`} 
                                        className="border-gray-300 group-hover:border-primary transition-colors"
                                    />
                                    <Label htmlFor={`gender-${option.toLowerCase()}`} className="text-sm font-normal text-foreground cursor-pointer group-hover:text-primary transition-colors">
                                        {option}
                                    </Label>
                                </div>
                            ))}
                        </RadioGroup>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="breed" className="border-b border-gray-100">
                    <AccordionTrigger className="text-base font-medium text-foreground hover:no-underline py-4 hover:text-primary transition-colors">
                        Breed
                    </AccordionTrigger>
                    <AccordionContent className="pt-2 pb-4">
                        <div className="relative mb-4">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                            <Input
                                type="search"
                                placeholder="Search breeds..."
                                className="pl-10 h-10 rounded-lg border-gray-300 bg-white focus:border-primary focus:ring-primary/20"
                                value={breedSearch}
                                onChange={(e) => setBreedSearch(e.target.value)}
                            />
                        </div>
                        <ScrollArea className="h-[200px] pr-3">
                            <div className="space-y-3">
                                {filteredBreeds.map((breed) => (
                                    <div key={breed} className="flex items-center space-x-3 group">
                                        <Checkbox 
                                            id={`breed-${breed.replace(/\s+/g, '-')}`} 
                                            defaultChecked={breed === 'All Breeds'} 
                                            className="border-gray-300 group-hover:border-primary transition-colors"
                                        />
                                        <Label htmlFor={`breed-${breed.replace(/\s+/g, '-')}`} className="text-sm font-normal text-foreground cursor-pointer group-hover:text-primary transition-colors">
                                            {breed}
                                        </Label>
                                    </div>
                                ))}
                            </div>
                        </ScrollArea>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="characteristics" className="border-b border-gray-100">
                     <AccordionTrigger className="text-base font-medium text-foreground hover:no-underline py-4 hover:text-primary transition-colors">
                         Characteristics
                     </AccordionTrigger>
                     <AccordionContent className="pt-2 pb-4">
                         <div className="space-y-3">
                            {characteristicsOptions.map((char) => (
                                <div key={char} className="flex items-center space-x-3 group">
                                    <Checkbox 
                                        id={`char-${char.replace(/\s+/g, '-')}`} 
                                        className="border-gray-300 group-hover:border-primary transition-colors"
                                    />
                                    <Label htmlFor={`char-${char.replace(/\s+/g, '-')}`} className="text-sm font-normal text-foreground cursor-pointer group-hover:text-primary transition-colors">
                                        {char}
                                    </Label>
                                </div>
                            ))}
                        </div>
                     </AccordionContent>
                </AccordionItem>
                <AccordionItem value="age" className="border-b border-gray-100">
                    <AccordionTrigger className="text-base font-medium text-foreground hover:no-underline py-4 hover:text-primary transition-colors">
                        Age
                    </AccordionTrigger>
                    <AccordionContent className="pt-2 pb-4">
                        <div className="space-y-3">
                           {ageOptions.map((age) => (
                               <div key={age} className="flex items-center space-x-3 group">
                                   <Checkbox 
                                       id={`age-${age.replace(/\s+/g, '-')}`} 
                                       className="border-gray-300 group-hover:border-primary transition-colors"
                                   />
                                   <Label htmlFor={`age-${age.replace(/\s+/g, '-')}`} className="text-sm font-normal text-foreground cursor-pointer group-hover:text-primary transition-colors">
                                       {age}
                                   </Label>
                               </div>
                           ))}
                       </div>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="color" className="border-b border-gray-100">
                    <AccordionTrigger className="text-base font-medium text-foreground hover:no-underline py-4 hover:text-primary transition-colors">
                        Color
                    </AccordionTrigger>
                    <AccordionContent className="pt-2 pb-4">
                        <ScrollArea className="h-[200px] pr-3">
                            <div className="space-y-3">
                                {colorOptions.map((color) => (
                                    <div key={color} className="flex items-center space-x-3 group">
                                        <Checkbox 
                                            id={`color-${color.replace(/\s+/g, '-')}`} 
                                            className="border-gray-300 group-hover:border-primary transition-colors"
                                        />
                                        <Label htmlFor={`color-${color.replace(/\s+/g, '-')}`} className="text-sm font-normal text-foreground cursor-pointer group-hover:text-primary transition-colors">
                                            {color}
                                        </Label>
                                    </div>
                                ))}
                            </div>
                        </ScrollArea>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="travel" className="border-b-0">
                    <AccordionTrigger className="text-base font-medium text-foreground hover:no-underline py-4 hover:text-primary transition-colors">
                        Ready To Travel
                    </AccordionTrigger>
                    <AccordionContent className="pt-2 pb-4">
                        <div className="space-y-3">
                           {travelOptions.map((option) => (
                               <div key={option} className="flex items-center space-x-3 group">
                                   <Checkbox 
                                       id={`travel-${option.replace(/\s+/g, '-')}`} 
                                       className="border-gray-300 group-hover:border-primary transition-colors"
                                   />
                                   <Label htmlFor={`travel-${option.replace(/\s+/g, '-')}`} className="text-sm font-normal text-foreground cursor-pointer group-hover:text-primary transition-colors">
                                       {option}
                                   </Label>
                               </div>
                           ))}
                       </div>
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </aside>
    );
};

export default FilterSidebar;