function createImagesPreviewer(selector, items) {

    var docF = document.createDocumentFragment();

    var selector = document.querySelector(selector);
    var previewImageDiv = document.createElement('div');
    previewImageDiv.className = 'preview-image-div';
    var previewHeader = document.createElement('h2');
    var imageContainer = document.createElement('div');
    var prevImg = document.createElement('IMG');
    
    
    
    previewImageDiv.appendChild(previewHeader)

    previewImageDiv.appendChild(prevImg)
    selector.appendChild(previewImageDiv);
    previewHeader.innerText = items[0].title;
  





    var listDiv = document.createElement('div');
    listDiv.className = 'listDiv';
    listDiv.style.textAlign = 'center'
    selector.appendChild(listDiv);
    var filterDiv = document.createElement('div');
    filterDiv.className = 'filterDiv';
    var filterHeader = document.createElement('h4');
    filterHeader.className = 'filterHeader';
    filterHeader.innerText = 'Filter';
    filterHeader.style.textAlign = 'center'
    var inputText = document.createElement("INPUT");
    inputText.setAttribute("type", "text");
    
    filterDiv.appendChild(filterHeader);
    filterDiv.appendChild(inputText);
    listDiv.appendChild(filterDiv);
    filterDiv.style.display = 'inline-block'
    
    var ul = document.createElement('ul');
    var li = document.createElement('li');
    li.className = 'li';
    li.style.padding = '10px'
    var liHeader = document.createElement('h2');
    var img = document.createElement('IMG');

    //style
    previewImageDiv.style.textAlign = 'center'
    previewImageDiv.style.width = ('50%')
    previewImageDiv.style.height = ('700px')
    previewImageDiv.style.display = 'inline-block';
    previewImageDiv.style.border = '1px solid black'
    previewImageDiv.style.cssFloat = 'left'
    prevImg.src = items[0].url
    prevImg.style.width = '80%'
    listDiv.style.width = ('20%')
    listDiv.style.display = 'inline-block';
    
    img.style.width = '100%';
    img.style.borderRadius = '20px'
    listDiv.style.overflow = 'scroll'
    listDiv.style.height = ('700px')
    liHeader.style.textAlign = 'center';
    ul.style.listStyleType = 'none'



    var count = items.length;
   
    
    for (var i = 0; i < count; i++) {
        var item = items[i];
        var title = item.title;
        var url = item.url;
        var currentLi = li.cloneNode(true);
        var currentHeader = liHeader.cloneNode(true);
        var currentImg = img.cloneNode(true);
        currentHeader.innerText = title;
      
        currentImg.src = url;
        currentLi.appendChild(currentHeader);
        currentLi.appendChild(currentImg);
        docF.appendChild(currentLi);
    }

    ul.appendChild(docF);
    listDiv.appendChild(ul);
    function clickEvent(ev) {
        var target = ev.target;
        if (target.tagName === 'IMG') {
            prevImg.src = target.src;
            var title = target.previousElementSibling.innerText;
            previewHeader.innerText = title;
        }
    }

    function mouseover(ev) {
        var target = ev.target;
        if (target.tagName === 'IMG') {
            target.parentElement.style.backgroundColor = 'gray'

        }

    }

    function mouseout(ev) {
        var target = ev.target;
        if (target.tagName === 'IMG') {
            target.parentElement.style.backgroundColor = ''

        }
    }

    function keyup(ev) {
        debugger;
        var target = ev.target;
        var text = target.value;
        var liChildren = listDiv.getElementsByTagName('li')
        for (var i = 0; i < liChildren.length; i++) {
            var currentLi = liChildren[i]
            var currentTitle = currentLi.firstElementChild.innerText;
            if(currentTitle.toLowerCase().indexOf(text.toLowerCase()) >= 0){
                currentLi.style.display = 'block'
            }
            else {
                currentLi.style.display = 'none'
            }
        }
    }
    listDiv.addEventListener('click', clickEvent, false)
    listDiv.addEventListener('mouseover', mouseover, false)
    listDiv.addEventListener('mouseout', mouseout, false)
    inputText.addEventListener('keyup', keyup, false)
}