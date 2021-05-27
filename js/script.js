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
    
    const optArticleSelector = '.post',
    optTitleSelector = '.post-title',
    optTitleListSelector = '.titles';
  
  function generateTitleLinks(){

  const titleList = document.querySelector(optTitleListSelector);
    /* remove contents of titleList */
    
    clearMessages(titleList);

    /* find all the articles and save them to variable: articles */
      /* ... */

    let html = '';
    
    const articles = document.querySelectorAll('.post');
    for(let article of articles){
      console.log(article);
    }

    /* get the article id */

    const articleId = article.getAttribute('id');

    /* find the title element */

    const articleTitle = article.querySelector(optTitleSelector).innerHTML;

    /* get the title from the title element */

    const getTitle = articleTitle.getAttribute('.post-title')

    /* create HTML of the link */

    const linkHTML = '<li><a href="#" + articleId + "><span>' + articleTitle + '</span></a></li>'; {
      console.log(linkHTML);
    }

    /* insert link into html variable */
    html = html + linkHTML;

    titleList.innerHTML = html;
    

  }

  generateTitleLinks();
}
  
  const links = document.querySelectorAll('.titles a');
  
  for(let link of links){
    link.addEventListener('click', titleClickHandler);
  }
}