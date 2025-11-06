"use client";

import { useState } from "react";

const bucketListItems = [
  "Set foot on all continents",
  "Live at least in 2 different countries with completely different cultures.",
  "Solve a Rubik's cube.",
  "Learn at least one foreign language.",
  "Swim with whale sharks",
  "Get drunk at least once in your life.",
  "Bungee jump",
  "Do the Mongol Rally",
  "Swim with dolphins",
  "Go on a Saffari",
  "Learn how to surf",
  "Scuba dive",
  "Fly an airplane",
  "Give a public speech",
  "Get your body in the ultimate shape at least once in your life",
  "Run a marathon",
  "Run a triathlon",
  "Hot air ballooning",
  "Ride a motorcycle",
  "Sing to an audience (Karaoke counts)",
  "Volunteer 6 months abroad",
  "Have your own business",
  "Fish and eat your catch",
  "Own a pet",
  "Renew your vows",
  "Watch the top 10 movies of all time",
  "White water rapids",
  "Try rock climbing",
  "Dive into the water from a cliff",
  "Learn how to make Sushi",
  "Go to Disney World",
  "Learn how to sail",
  "Paint and frame your painting",
  "Help a stranger in distress",
  "Ride a rollercoaster",
  "Drive the Autobahn",
  "Spend Christmas on the beach",
  "Get your B.A. or equivalent",
  "Find a job you love or create the job you love",
  "Read the top 5 novels of all time",
  "Sleep under the stars",
  "Make a fool of yourself",
  "Drive across an entire country",
  "See a Solar Eclipse",
  "Spend the night in a haunted place",
  "Learn how to play a musical instrument",
  "Drink beer at the Oktoberfest",
  "Sleep in an igloo",
  "Brew your own beer",
  "Go to the Superbowl",
  "Go to the Olympics (Summer or Winter)",
  "Write a book (at least try)",
  "Plant a tree",
  "Learn how to dance",
  "Ride a camel in the desert",
  "Ride an elephant",
  "Grow a beard at least once in your life",
  "Shave your hair off",
  "Go skinny dipping",
  "Go to your favorite band's concert",
  "Climb a mountain",
  "Learn how to swim",
  "Party until sunrise",
  "Go wild at La Tomatina",
  "Go to the Opera",
  "Cross a country using public transportation",
  "Get to know your neighbors",
  "Travel around the world",
  "Backpack through another country",
  "Go Camping",
  "Feed a homeless person",
  "Take a class you've always wanted",
  "Own a sportscar",
  "Go Skiing",
  "Shoot a gun",
  "Trek to Machu Pichu",
  "Visit Angkor Wat",
  "See the Iguazu Falls",
  "Go Kayaking",
  "Dance at the Carnival in Rio",
  "See a Glacier",
  "Take a bath in a hot spring",
  "Try to beat a world record",
  "Go to a drive-in movie theatre",
  "Ride a gondola in Venice",
  "See the Eiffel Tower",
  "Fly a kite",
  "Solve a Jigsaw puzzle",
  "Be an extra in a movie",
  "Dance the Macarena",
  "Eat Fried Oreos / Twinkies / Cheescake",
  "Float in the Dead Sea",
  "Travel at least once by train",
  "Go on a cruise",
  "See the Northern Lights (Aurora Borealis)",
  "Travel by yourself",
  "Ride a horse",
  "Fall in love",
  "Learn how to juggle",
  "Feel like the happiest person on Earth.",
];

export default function Home() {
  const [checkedItems, setCheckedItems] = useState<Set<number>>(new Set());
  const [showScore, setShowScore] = useState(false);

  const handleCheckboxChange = (index: number) => {
    const newChecked = new Set(checkedItems);
    if (newChecked.has(index)) {
      newChecked.delete(index);
    } else {
      newChecked.add(index);
    }
    setCheckedItems(newChecked);
  };

  const calculateScore = () => {
    return 100 - checkedItems.size;
  };

  const handleCheckScore = () => {
    setShowScore(true);
  };

  return (
    <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-2 text-gray-900">
          100 Things to Do Before you Die
        </h1>
        <p className="text-center text-gray-600 mb-8">
          Check off the items you've completed
        </p>

        <div className="space-y-3 mb-8">
          {bucketListItems.map((item, index) => (
            <label
              key={index}
              className="flex items-start gap-3 p-3 rounded hover:bg-gray-50 cursor-pointer group"
            >
              <input
                type="checkbox"
                checked={checkedItems.has(index)}
                onChange={() => handleCheckboxChange(index)}
                className="mt-1 w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500 cursor-pointer"
              />
              <span className="flex-1 text-gray-800 group-hover:text-gray-900">
                {index + 1}. {item}
              </span>
            </label>
          ))}
        </div>

        <div className="text-center mb-8">
          <button
            onClick={handleCheckScore}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg text-lg transition-colors"
          >
            Check my score
          </button>
        </div>

        {showScore && (
          <div className="text-center p-8 bg-gray-50 rounded-lg">
            <div className="text-6xl font-bold text-blue-600 mb-2">
              {calculateScore()}
            </div>
            <div className="text-xl text-gray-700">
              {calculateScore() === 100
                ? "You haven't completed anything yet!"
                : calculateScore() === 0
                ? "You've completed everything! Amazing!"
                : `You've completed ${checkedItems.size} out of 100 items.`}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
