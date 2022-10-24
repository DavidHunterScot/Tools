var txtFindUrlsInString = document.getElementById( 'txtFindUrlsInString' );
var excludeTrailingBracketFindUrlsInString = document.getElementById( 'excludeTrailingBracketFindUrlsInString' );
var btnFindUrlsInString = document.getElementById( 'btnFindUrlsInString' );
var resultFindUrlsInString = document.getElementById( 'resultFindUrlsInString' );

txtFindUrlsInString.disabled = false;
excludeTrailingBracketFindUrlsInString.disabled = false;
btnFindUrlsInString.disabled = false;
resultFindUrlsInString.innerHTML = '';

btnFindUrlsInString.addEventListener( 'click', function()
{
  var urls = extractUrls( txtFindUrlsInString.value, excludeTrailingBracketFindUrlsInString.checked );
  
  if( urls.length > 0 )
  {
    for( var u = 0; u < urls.length; u++ )
    {
      resultFindUrlsInString.innerHTML += '<a href="' + urls[ u ] + '" target="_blank">' + urls[ u ] + '</a><br>';
      
      /*if( u < urls.length - 1 )
        resultFindUrlsInString.innerHTML += '<br>';
      }*/
    }
  }
  else
  {
    resultFindUrlsInString.innerHTML = 'No URLs found.';
  }
});

function extractUrls( string, excludeTrailingBracket = false )
{
  var regex = /\bhttps?:\/\/\S+/gi;
  
  var urls = string.match( regex );
  
  if( urls !== null )
  {
    if( excludeTrailingBracket )
    {
      for( var u = 0; u < urls.length; u++ )
      {
        if( urls[ u ].substring( urls[ u ].length -1 ) == ")" )
        {
          urls[ u ] = urls[ u ].substring( 0, urls[ u ].length -1 );
        }
      }
    }
    
    return urls;
  }
  return [];
}