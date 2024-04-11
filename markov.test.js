const { MarkovMachine } = require("./markov"); // Import the MarkovMachine class

describe("MarkovMachine", () => {
  describe("makeChains", () => {
    test("should correctly create chains from input text", () => {
      // Test case for makeChains method
      const text = "the cat in the hat";
      const mm = new MarkovMachine(text);

      // Test your expectations here
      expect(mm.chains.get("the")).toEqual(["cat", "hat"]);
      expect(mm.chains.get("cat")).toEqual(["in"]);
      expect(mm.chains.get("in")).toEqual(["the"]);
      expect(mm.chains.get("hat")).toEqual([null]);
    });
  });

  describe("makeText", () => {
    test("should generate random text of specified length", () => {
      // Test case for makeText method
      const text = "the cat in the hat";
      const mm = new MarkovMachine(text);
      const generatedText = mm.makeText(4); // Generate text with 4 words

      // Test your expectations here
      const words = generatedText.split(" ");
      expect(words.length).toBe(4);
    });
  });
});
