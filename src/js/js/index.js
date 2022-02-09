import Twig from 'twig';
Twig.renderFile('./path/to/someFile.twig', {foo:'bar'}, (err, html) => {
    html; // compiled string
});