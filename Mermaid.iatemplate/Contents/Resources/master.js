import mermaid from './mermaid/mermaid.esm.min.mjs';
mermaid.initialize({startOnLoad:false});
window.addEventListener('load', function() {
    document.body.addEventListener('ia-writer-change', function(){
        const graphs = document.querySelectorAll('.mermaid');
        graphs.forEach(graph => {
          graph.removeAttribute('data-processed')
        });
        mermaid.init();
    })
})