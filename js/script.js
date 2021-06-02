'use strict';

function clearMessages(titleList){
  // document.querySelector(optTitleListSelector);
  // document.querySelector(document.querySelector(optTitleListSelector)).innerHTML=''
  titleList.innerHTML='';
}
/*document.getElementById('test-button').addEventListener('click', function(){
    const links = document.querySelectorAll('.titles a');
    console.log('links:', links);
  });*/
{
  const titleClickHandler = function(event){
    event.preventDefault();
    const clickedElement = this;
    console.log('Link was clicked!');
    console.log(event);
  
    /* [DONE] remove class 'active' from all article links  */

    const activeLinks = document.querySelectorAll('.titles a.active');

    for(let activeLink of activeLinks){
      activeLink.classList.remove('active');
    }
  
    /* [IN PROGRESS] add class 'active' to the clicked link */

    const activeArticles = document.querySelectorAll('.posts article.active');

    clickedElement.classList.add('active');{
      console.log('clickedElement:', clickedElement);
    }
  
    /* [DONE] remove class 'active' from all articles */

    for(let activeArticle of activeArticles){
      activeArticle.classList.remove('active');
      console.log('clickedElement:', clickedElement);
    }
  
  
    /* get 'href' attribute from the clicked link */

    const articleSelector = clickedElement.getAttribute('href');{
      console.log(articleSelector);
    }
  
    /* find the correct article using the selector (value of 'href' attribute) */

    const targetArticle = document.querySelector(articleSelector);
    console.log(targetArticle);
    
    /* add class 'active' to the correct article */

    targetArticle.classList.add('active');
  };  
  

    
  const optArticleSelector = '.post',
    optTitleSelector = '.post-title',
    optTitleListSelector = '.titles',
    optArticleTagsSelector = '.post-tags .list',
    optArticleAuthorSelector = '.post-author',
    optTagsListSelector = '.tags.list',
    optCloudClassCount = 5,
    optCloudClassPrefix = 'tag-size-',
    optAuthorsListSelector = '.authors.list';
  
  function generateTitleLinks(customSelector = ''){

    const titleList = document.querySelector(optTitleListSelector);
    /* remove contents of titleList */
    
    clearMessages(titleList);

    /* find all the articles and save them to variable: articles */
    
    let html = '';
    console.log(html);
    
    const articles = document.querySelectorAll(optArticleSelector + customSelector);
    for(let article of articles){
      console.log(article);
      console.log(customSelector);
    
      /* get the article id */

      const articleId = article.getAttribute('id');
    
      /* find the title element */

      const articleTitle = article.querySelector(optTitleSelector).innerHTML;

      /* get the title from the title element */

    

      /* create HTML of the link */

      const linkHTML = '<li><a href="#' + articleId + '"><span>' + articleTitle + '</span></a></li>';{
        console.log(linkHTML);
      }

      /* insert link into html variable */
      html = html + linkHTML;

      titleList.innerHTML = html;

      const links = document.querySelectorAll('.titles a');{
        console.log(links);
      }
    
      for(let link of links){
        link.addEventListener('click', titleClickHandler);
      }
    
    }
  }
  
  
  generateTitleLinks();

  function calculateTagsParams(tags){
    const params = {
      min:999999,
      max: 0
    };
    console.log(params);

    for(let tag in tags){
      console.log(tag + ' is used ' + tags[tag] + ' times');
      if(tags[tag] > params.max){
        params.max = tags[tag];
      }
      if(tags[tag] < params.min){
        params.min = tags[tag];
      }
    }
    console.log(tags);
    return params;
  }

  function calculateTagClass(count, params){
    const normalizedCount = count - params.min;
    const normalizedMax = params.max - params.min;
    const percentage = normalizedCount / normalizedMax;
    const classNumber = Math.floor( percentage * (optCloudClassCount - 1) + 1 );
    return optCloudClassPrefix + classNumber;
  }
  
  function generateTags(){

    /* [NEW] create a new variable allTags with an empty object */
  
    let allTags = {};
    
    /* find all articles */

    const articles = document.querySelectorAll(optArticleSelector);
    console.log(articles);
      
  

    /* START LOOP: for every article: */

    for(let article of articles){
      console.log(article);

      /* find tags wrapper */

      const tagsWrapper = article.querySelector(optArticleTagsSelector);{
        console.log(tagsWrapper);
      }

      /* make html variable with empty string */

      let html = '';

      /* get tags from data-tags attribute */

      const articleTags = article.getAttribute('data-tags');{
        console.log(articleTags);
      }

      /* split tags into array */

      const articleTagsArray = articleTags.split(' ');{
        console.log(articleTagsArray);
      }

      /* START LOOP: for each tag */

      for(let tag of articleTagsArray){
        console.log(tag);

        /* generate HTML of the link */

        const linkHTML = '<li><a href="#tag-' + '">' + tag + '</a></li>';{
          console.log(linkHTML);
        }

        /* add generated code to html variable */

        html += linkHTML + ' ';

        /* [NEW] check if this link is NOT already in allTags */
      
        if(!allTags[tag]) {
        
          /* [NEW] add generated code to allTags array */
        
          allTags[tag] = 1;
        } else {
          allTags[tag]++;
        }

      /* END LOOP: for each tag */
      }
      /* insert HTML of all the links into the tags wrapper */

      console.log('insert HTML');
      tagsWrapper.innerHTML = html;

      /* END LOOP: for every article: */
    }

    /* [NEW] find list of tags in right column */
  
    const tagList = document.querySelector('.tags');

    const tagsParams = calculateTagsParams(allTags);
    console.log('tagsParams:', tagsParams);

    /* [NEW] create variable for all links HTML code */
    let allTagsHTML = '';

    /* [NEW] START LOOP: for each tag in allTags: */
    
    for(let tag in allTags){
    
      /* [NEW] generate code of a link and add it to allTagsHTML */
      /* allTagsHTML += tag + ' (' + allTags[tag] + ') ';*/
      /*allTagsHTML += '<li><a href="#tag-'+ tag +'">'+ tag +'</a>(' + allTags[tag] + ')</li>';*/

      const tagLinkHTML = '<li><a class="' + calculateTagClass(allTags[tag], tagsParams) + '" href="#tag-' + tag + '">' + tag + '</a></li>';
      console.log('tagLinkHTML:', tagLinkHTML);

      allTagsHTML += tagLinkHTML;
    
    /* [NEW] END LOOP: for each tag in allTags: */
    }
    /*[NEW] add HTML from allTagsHTML to tagList */
    
    tagList.innerHTML = allTagsHTML;
  
  }
  generateTags();

  
  function tagClickHandler(event){
    /* prevent default action for this event */

    event.preventDefault();

    /* make new constant named "clickedElement" and give it the value of "this" */

    const clickedElement = this;

    /* make a new constant "href" and read the attribute "href" of the clicked element */

    const href = clickedElement.getAttribute('href');
    console.log(href);
  

    /* make a new constant "tag" and extract tag from the "href" constant */

    const tag = href.replace('#tag-', '');
    console.log(tag);
  

    /* find all tag links with class active */

    const activeTags = document.querySelectorAll('a.active[href^="#tag-"]');
    console.log(activeTags);
  

    /* START LOOP: for each active tag link */

    let html = '';
    console.log(html);

    for(let activeTag of activeTags){
      console.log(activeTag);

      /* remove class active */

      activeTag.classList.remove('active');

      /* END LOOP: for each active tag link */

    }

    /* find all tag links with "href" attribute equal to the "href" constant */

    const tagLinks = document.querySelectorAll('a.active[href^="#tag-"]');

    /* START LOOP: for each found tag link */

    for(let tagLink of tagLinks){
      console.log(tagLink);

      /* add class active */

      tagLink.classList.add('active');

      /* END LOOP: for each found tag link */

    }

    /* execute function "generateTitleLinks" with article selector as argument */

    generateTitleLinks('[data-tags~="' + tag + '"]');
  }

  function addClickListenersToTags(){
    /* find all links to tags */

    const tagLinks = document.querySelectorAll('a[href^="#tag-"]');

    /* START LOOP: for each link */

    for(let tagLink of tagLinks){

      /* add tagClickHandler as event listener for that link */

      tagLink.addEventListener('click', tagClickHandler);

      /* END LOOP: for each link */
    }
  }
  

  addClickListenersToTags();

  function generateAuthors(){
    /* find all articles */
  
    const articles = document.querySelectorAll(optArticleSelector);
  
    /* START LOOP: for every article: */
  
    for(let article of articles){
  
      /* find authors wrapper */
  
      const authorsWrapper = article.querySelector(optArticleAuthorSelector);
      console.log(authorsWrapper);
  
      /* make html variable with empty string */
  
      let html = '';
      console.log(html);
  
      /* get authors from data-author attribute */
  
      const articleAuthors = article.getAttribute('data-author');
      console.log(articleAuthors);
      
  
      /* generate HTML of the link */
  
      const linkHTML = '<a href="#author-'+ articleAuthors +'">' + articleAuthors + '</a>';
      console.log(linkHTML);
  
      /* add generated code to html variable */
  
      html = html + linkHTML;
      console.log(linkHTML);
  
      /* insert HTML of all the links into the tags wrapper */
  
      authorsWrapper.innerHTML = html;
      console.log(authorsWrapper.innerHTML);
  
    /* END LOOP: for every article: */
    }
  }
  generateAuthors();

  const authorClickHandler = function(event){
    event.preventDefault();
    const clickedElement = this;
    const href = clickedElement.getAttribute('href');
    const author = href.replace('#author-','');
    const activeAuthorLinks = document.querySelectorAll('a[href^="#author-"]');
    
    for(let activeAuthorLink of activeAuthorLinks){
      activeAuthorLink.classList.remove('active');
    }
    const tagLinks = document.querySelectorAll('a[href="' + href + '"]');
    for (let tag of tagLinks) {
      tag.classList.add('active');
    }
    generateTitleLinks('[data-author="' + author + '"]');
  };



  const addClickListenersToAuthors = function () {
    const linkAuthors = document.querySelectorAll('a[href^="#author-"]');
    for (let linkAuthor of linkAuthors) {
      linkAuthor.addEventListener('click', authorClickHandler);
    }
  };
  addClickListenersToAuthors();
}


