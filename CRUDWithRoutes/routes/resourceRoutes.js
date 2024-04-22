const express = require('express');
const router = express.Router();

let resources = [
  { id: 1, name: 'Resource 1', description: 'Description 1' },
  { id: 2, name: 'Resource 2', description: 'Description 2' },
  { id: 3, name: 'Resource 3', description: 'Description 3' }
];

router.get('/', (req, res) => {
  res.json(resources);
});

router.get('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const resource = resources.find(item => item.id === id);
  if (!resource) {
    res.status(404).json({ error: 'Resource not found' });
  } else {
    res.json(resource);
  }
});

router.post('/', (req, res) => {
  const { name, description } = req.body;
  if (!name || !description) {
    res.status(400).json({ error: 'Name and description are required' });
  } else {
    const id = resources.length + 1;
    const newResource = { id, name, description };
    resources.push(newResource);
    res.status(201).json(newResource);
  }
});

router.put('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const { name, description } = req.body;
  const resourceIndex = resources.findIndex(item => item.id === id);
  if (resourceIndex === -1) {
    res.status(404).json({ error: 'Resource not found' });
  } else if (!name || !description) {
    res.status(400).json({ error: 'Name and description are required' });
  } else {
    resources[resourceIndex] = { id, name, description };
    res.json(resources[resourceIndex]);
  }
});

router.delete('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const resourceIndex = resources.findIndex(item => item.id === id);
  if (resourceIndex === -1) {
    res.status(404).json({ error: 'Resource not found' });
  } else {
    resources.splice(resourceIndex, 1);
    res.sendStatus(204);
  }
});

module.exports = router;
