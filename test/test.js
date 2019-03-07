import assert from 'assert';
import {
  generic3Noise, generic2Noise, generic1Noise1D, generic1Noise2D,
  basicPerlinNoise, classicPerlin2DNoise, cellular2DNoise,
} from '../src';

const randomizer = () => Math.random() * 10000;

/**
 * @test {unpleasant}
 */
describe('unpleasant', () => {
  /**
   * @test {unpleasant#generic1Noise1D}
   */
  describe('.generic1Noise1D', () => {
    it('should return a number', () => {
      for (let i = 0; i < 1000; i++) {
        assert(typeof generic1Noise1D(randomizer()) === 'number');
      }
    });
  });
  /**
   * @test {unpleasant#generic1Noise2D}
   */
  describe('.generic1Noise2D', () => {
    it('should return a number', () => {
      for (let i = 0; i < 1000; i++) {
        assert(typeof generic1Noise2D(randomizer(), randomizer()) === 'number');
      }
    });
  });
  /**
   * @test {unpleasant#generic2Noise}
   */
  describe('.generic2Noise', () => {
    it('should return a number', () => {
      for (let i = 0; i < 1000; i++) {
        assert(typeof generic2Noise(randomizer(), randomizer()) === 'number');
      }
    });
  });
  /**
   * @test {unpleasant#generic3Noise}
   */
  describe('.generic3Noise', () => {
    it('should return a number', () => {
      for (let i = 0; i < 1000; i++) {
        assert(typeof generic3Noise(randomizer(), randomizer(), randomizer()) === 'number');
      }
    });
  });


  /**
   * @test {unpleasant#basicPerlinNoise}
   */
  describe('.basicPerlinNoise', () => {
    it('should return a number', () => {
      for (let i = 0; i < 1000; i++) {
        assert(typeof basicPerlinNoise(randomizer(), randomizer()) === 'number');
      }
    });
  });
  /**
   * @test {unpleasant#classicPerlin2DNoise}
   */
  describe('.classicPerlin2DNoise', () => {
    it('should return a number', () => {
      for (let i = 0; i < 1000; i++) {
        assert(typeof classicPerlin2DNoise(randomizer(), randomizer()) === 'number');
      }
    });
  });
  /**
   * @test {unpleasant#cellular2DNoise}
   */
  describe('.cellular2DNoise', () => {
    it('should return an array of 2 numbers', () => {
      for (let i = 0; i < 1000; i++) {
        const result = cellular2DNoise(randomizer(), randomizer());
        assert(result instanceof Array);
        assert(typeof result[0] === 'number');
        assert(typeof result[1] === 'number');
      }
    });
  });
});
