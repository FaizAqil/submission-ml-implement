const tf = require('@tensorflow/tfjs-node');

const MODEL_URL = 'https://storage.googleapis.com/storage-ml-app-skin/model-in-prod/model.json';

const loadModel = async () => {
  try {
    console.log('Loading model from URL:', MODEL_URL);
    const model = await tf.loadGraphModel(MODEL_URL);
    console.log('Model loaded successfully');
    return model;
  } catch (error) {
    console.error('Error loading model:', error);
    throw new Error('Failed to load model');
  }
};

module.exports = loadModel;