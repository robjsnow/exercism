class Lasagna
{
    const byte EXPECTED_MINUTES_IN_OVEN = 40;
    const byte PREPARATION_MINUTES_PER_LAYER = 2;

    public int ExpectedMinutesInOven() {
        return EXPECTED_MINUTES_IN_OVEN;
    }
    public int RemainingMinutesInOven(int actualMinutesInOven){
        return EXPECTED_MINUTES_IN_OVEN - actualMinutesInOven;
    }
    public int PreparationTimeInMinutes(int numberOfLayers) {
          return PREPARATION_MINUTES_PER_LAYER * numberOfLayers;
    }
        public int ElapsedTimeInMinutes(int numberOfLayers, int actualMinutesInOven) {
        return PreparationTimeInMinutes(numberOfLayers) + actualMinutesInOven;
    }
}
