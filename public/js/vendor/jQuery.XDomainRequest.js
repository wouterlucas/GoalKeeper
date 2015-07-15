  


<!DOCTYPE html>
<html>
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# githubog: http://ogp.me/ns/fb/githubog#">
    <meta charset='utf-8'>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>jQuery-ajaxTransport-XDomainRequest/jQuery.XDomainRequest.js at 8754607e5f9ab73ccc37246f0c12fed14f85bd28 · MoonScript/jQuery-ajaxTransport-XDomainRequest</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub" />
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub" />
    <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-114.png" />
    <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114.png" />
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-144.png" />
    <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144.png" />
    <link rel="logo" type="image/svg" href="http://github-media-downloads.s3.amazonaws.com/github-logo.svg" />
    <link rel="xhr-socket" href="/_sockets">
    <meta name="msapplication-TileImage" content="/windows-tile.png">
    <meta name="msapplication-TileColor" content="#ffffff">

    
    
    <link rel="icon" type="image/x-icon" href="/favicon.ico" />

    <meta content="authenticity_token" name="csrf-param" />
<meta content="E5V13IAqok5C8mr0vbsAk+hw4Q+PYlpIi2m4qP64uuI=" name="csrf-token" />

    <link href="https://a248.e.akamai.net/assets.github.com/assets/github-caf3c15831ad6bcb53cf552941d107aa4017fc20.css" media="all" rel="stylesheet" type="text/css" />
    <link href="https://a248.e.akamai.net/assets.github.com/assets/github2-ab66d7f455e418ccfc86d9d7d4fbda986d7ef474.css" media="all" rel="stylesheet" type="text/css" />
    


      <script src="https://a248.e.akamai.net/assets.github.com/assets/frameworks-bafee0a321be765ed924edd4c746d8af68510845.js" type="text/javascript"></script>
      <script src="https://a248.e.akamai.net/assets.github.com/assets/github-22ff2896fa07a070b471106b1bf32cdda6090796.js" type="text/javascript"></script>
      
      <meta http-equiv="x-pjax-version" content="2d62cbe7a4c9f71c478c26840c87f1f1">

        <link data-pjax-transient rel='permalink' href='/MoonScript/jQuery-ajaxTransport-XDomainRequest/blob/8754607e5f9ab73ccc37246f0c12fed14f85bd28/jQuery.XDomainRequest.js'>
    <meta property="og:title" content="jQuery-ajaxTransport-XDomainRequest"/>
    <meta property="og:type" content="githubog:gitrepository"/>
    <meta property="og:url" content="https://github.com/MoonScript/jQuery-ajaxTransport-XDomainRequest"/>
    <meta property="og:image" content="https://secure.gravatar.com/avatar/8cf307d9c6ed1e0bfc5810369ce805d3?s=420&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png"/>
    <meta property="og:site_name" content="GitHub"/>
    <meta property="og:description" content="jQuery-ajaxTransport-XDomainRequest - jQuery ajaxTransport extension that uses XDomainRequest for IE8+"/>
    <meta property="twitter:card" content="summary"/>
    <meta property="twitter:site" content="@GitHub">
    <meta property="twitter:title" content="MoonScript/jQuery-ajaxTransport-XDomainRequest"/>

    <meta name="description" content="jQuery-ajaxTransport-XDomainRequest - jQuery ajaxTransport extension that uses XDomainRequest for IE8+" />

  <link href="https://github.com/MoonScript/jQuery-ajaxTransport-XDomainRequest/commits/8754607e5f9ab73ccc37246f0c12fed14f85bd28.atom" rel="alternate" title="Recent Commits to jQuery-ajaxTransport-XDomainRequest:8754607e5f9ab73ccc37246f0c12fed14f85bd28" type="application/atom+xml" />

  </head>


  <body class="logged_in page-blob macintosh vis-public env-production  ">
    <div id="wrapper">

      

      
      
      

      <div class="header header-logged-in true">
  <div class="container clearfix">

    <a class="header-logo-blacktocat" href="https://github.com/">
  <span class="mega-icon mega-icon-blacktocat"></span>
</a>

    <div class="divider-vertical"></div>

      <a href="/notifications" class="notification-indicator tooltipped downwards" title="You have no unread notifications">
    <span class="mail-status all-read"></span>
  </a>
  <div class="divider-vertical"></div>


      <div class="command-bar js-command-bar  ">
            <form accept-charset="UTF-8" action="/search" class="command-bar-form" id="top_search_form" method="get">
  <a href="/search/advanced" class="advanced-search-icon tooltipped downwards command-bar-search" id="advanced_search" title="Advanced search"><span class="mini-icon mini-icon-advanced-search "></span></a>

  <input type="text" data-hotkey="/ s" name="q" id="js-command-bar-field" placeholder="Search or type a command" tabindex="1" data-username="wouterlucas" autocapitalize="off">

  <span class="mini-icon help tooltipped downwards" title="Show command bar help">
    <span class="mini-icon mini-icon-help"></span>
  </span>

  <input type="hidden" name="ref" value="cmdform">

    <input type="hidden" class="js-repository-name-with-owner" value="MoonScript/jQuery-ajaxTransport-XDomainRequest"/>
    <input type="hidden" class="js-repository-branch" value=""/>
    <input type="hidden" class="js-repository-tree-sha" value="7a196c077c0acb65c13657be8b44b114c4997dbc"/>

  <div class="divider-vertical"></div>
</form>
        <ul class="top-nav">
            <li class="explore"><a href="https://github.com/explore">Explore</a></li>
            <li><a href="https://gist.github.com">Gist</a></li>
            <li><a href="/blog">Blog</a></li>
          <li><a href="http://help.github.com">Help</a></li>
        </ul>
      </div>

    

  
    <ul id="user-links">
      <li>
        <a href="https://github.com/wouterlucas" class="name">
          <img height="20" src="https://secure.gravatar.com/avatar/b8d89379d196be4607ef4039293ebef9?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="20" /> wouterlucas
        </a>
      </li>
      <li>
        <a href="/new" id="new_repo" class="tooltipped downwards" title="Create a new repo">
          <span class="mini-icon mini-icon-create"></span>
        </a>
      </li>
      <li>
        <a href="/settings/profile" id="account_settings"
          class="tooltipped downwards"
          title="Account settings ">
          <span class="mini-icon mini-icon-account-settings"></span>
        </a>
      </li>
      <li>
        <a href="/logout" data-method="post" id="logout" class="tooltipped downwards" title="Sign out">
          <span class="mini-icon mini-icon-logout"></span>
        </a>
      </li>
    </ul>



    
  </div>
</div>

      

      

      


            <div class="site hfeed" itemscope itemtype="http://schema.org/WebPage">
      <div class="hentry">
        
        <div class="pagehead repohead instapaper_ignore readability-menu ">
          <div class="container">
            <div class="title-actions-bar">
              


<ul class="pagehead-actions">


    <li class="subscription">
      <form accept-charset="UTF-8" action="/notifications/subscribe" data-autosubmit="true" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="authenticity_token" type="hidden" value="E5V13IAqok5C8mr0vbsAk+hw4Q+PYlpIi2m4qP64uuI=" /></div>  <input id="repository_id" name="repository_id" type="hidden" value="2800111" />

    <div class="select-menu js-menu-container js-select-menu">
      <span class="minibutton select-menu-button js-menu-target">
        <span class="js-select-button">
          <span class="mini-icon mini-icon-watching"></span>
          Watch
        </span>
      </span>

      <div class="select-menu-modal-holder js-menu-content">
        <div class="select-menu-modal">
          <div class="select-menu-header">
            <span class="select-menu-title">Notification status</span>
            <span class="mini-icon mini-icon-remove-close js-menu-close"></span>
          </div> <!-- /.select-menu-header -->

          <div class="select-menu-list js-navigation-container">

            <div class="select-menu-item js-navigation-item js-navigation-target selected">
              <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
              <div class="select-menu-item-text">
                <input checked="checked" id="do_included" name="do" type="radio" value="included" />
                <h4>Not watching</h4>
                <span class="description">You only receive notifications for discussions in which you participate or are @mentioned.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="mini-icon mini-icon-watching"></span>
                  Watch
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

            <div class="select-menu-item js-navigation-item js-navigation-target ">
              <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
              <div class="select-menu-item-text">
                <input id="do_subscribed" name="do" type="radio" value="subscribed" />
                <h4>Watching</h4>
                <span class="description">You receive notifications for all discussions in this repository.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="mini-icon mini-icon-unwatch"></span>
                  Unwatch
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

            <div class="select-menu-item js-navigation-item js-navigation-target ">
              <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
              <div class="select-menu-item-text">
                <input id="do_ignore" name="do" type="radio" value="ignore" />
                <h4>Ignoring</h4>
                <span class="description">You do not receive any notifications for discussions in this repository.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="mini-icon mini-icon-mute"></span>
                  Stop ignoring
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

          </div> <!-- /.select-menu-list -->

        </div> <!-- /.select-menu-modal -->
      </div> <!-- /.select-menu-modal-holder -->
    </div> <!-- /.select-menu -->

</form>
    </li>

    <li class="js-toggler-container js-social-container starring-container ">
      <a href="/MoonScript/jQuery-ajaxTransport-XDomainRequest/unstar" class="minibutton js-toggler-target star-button starred upwards" title="Unstar this repo" data-remote="true" data-method="post" rel="nofollow">
        <span class="mini-icon mini-icon-remove-star"></span>
        <span class="text">Unstar</span>
      </a>
      <a href="/MoonScript/jQuery-ajaxTransport-XDomainRequest/star" class="minibutton js-toggler-target star-button unstarred upwards" title="Star this repo" data-remote="true" data-method="post" rel="nofollow">
        <span class="mini-icon mini-icon-star"></span>
        <span class="text">Star</span>
      </a>
      <a class="social-count js-social-count" href="/MoonScript/jQuery-ajaxTransport-XDomainRequest/stargazers">48</a>
    </li>

        <li>
          <a href="/MoonScript/jQuery-ajaxTransport-XDomainRequest/fork" class="minibutton js-toggler-target fork-button lighter upwards" title="Fork this repo" rel="nofollow" data-method="post">
            <span class="mini-icon mini-icon-branch-create"></span>
            <span class="text">Fork</span>
          </a>
          <a href="/MoonScript/jQuery-ajaxTransport-XDomainRequest/network" class="social-count">13</a>
        </li>


</ul>

              <h1 itemscope itemtype="http://data-vocabulary.org/Breadcrumb" class="entry-title public">
                <span class="repo-label"><span>public</span></span>
                <span class="mega-icon mega-icon-public-repo"></span>
                <span class="author vcard">
                  <a href="/MoonScript" class="url fn" itemprop="url" rel="author">
                  <span itemprop="title">MoonScript</span>
                  </a></span> /
                <strong><a href="/MoonScript/jQuery-ajaxTransport-XDomainRequest" class="js-current-repository">jQuery-ajaxTransport-XDomainRequest</a></strong>
              </h1>
            </div>

            
  <ul class="tabs">
    <li><a href="/MoonScript/jQuery-ajaxTransport-XDomainRequest" class="selected" highlight="repo_source repo_downloads repo_commits repo_tags repo_branches">Code</a></li>
    <li><a href="/MoonScript/jQuery-ajaxTransport-XDomainRequest/network" highlight="repo_network">Network</a></li>
    <li><a href="/MoonScript/jQuery-ajaxTransport-XDomainRequest/pulls" highlight="repo_pulls">Pull Requests <span class='counter'>2</span></a></li>

      <li><a href="/MoonScript/jQuery-ajaxTransport-XDomainRequest/issues" highlight="repo_issues">Issues <span class='counter'>4</span></a></li>

      <li><a href="/MoonScript/jQuery-ajaxTransport-XDomainRequest/wiki" highlight="repo_wiki">Wiki</a></li>


    <li><a href="/MoonScript/jQuery-ajaxTransport-XDomainRequest/graphs" highlight="repo_graphs repo_contributors">Graphs</a></li>


  </ul>
  
<div class="tabnav">

  <span class="tabnav-right">
    <ul class="tabnav-tabs">
          <li><a href="/MoonScript/jQuery-ajaxTransport-XDomainRequest/tags" class="tabnav-tab" highlight="repo_tags">Tags <span class="counter blank">0</span></a></li>
    </ul>
    
  </span>

  <div class="tabnav-widget scope">


    <div class="select-menu js-menu-container js-select-menu js-branch-menu">
      <a class="minibutton select-menu-button js-menu-target" data-hotkey="w" data-ref="">
        <span class="mini-icon mini-icon-tree"></span>
        <i>tree:</i>
        <span class="js-select-button">8754607e5f</span>
      </a>

      <div class="select-menu-modal-holder js-menu-content js-navigation-container">

        <div class="select-menu-modal">
          <div class="select-menu-header">
            <span class="select-menu-title">Switch branches/tags</span>
            <span class="mini-icon mini-icon-remove-close js-menu-close"></span>
          </div> <!-- /.select-menu-header -->

          <div class="select-menu-filters">
            <div class="select-menu-text-filter">
              <input type="text" id="commitish-filter-field" class="js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
            </div>
            <div class="select-menu-tabs">
              <ul>
                <li class="select-menu-tab">
                  <a href="#" data-tab-filter="branches" class="js-select-menu-tab">Branches</a>
                </li>
                <li class="select-menu-tab">
                  <a href="#" data-tab-filter="tags" class="js-select-menu-tab">Tags</a>
                </li>
              </ul>
            </div><!-- /.select-menu-tabs -->
          </div><!-- /.select-menu-filters -->

          <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket css-truncate" data-tab-filter="branches">

            <div data-filterable-for="commitish-filter-field" data-filterable-type="substring">

                <div class="select-menu-item js-navigation-item js-navigation-target ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/MoonScript/jQuery-ajaxTransport-XDomainRequest/blob/master/jQuery.XDomainRequest.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="master" rel="nofollow" title="master">master</a>
                </div> <!-- /.select-menu-item -->
            </div>

              <div class="select-menu-no-results">Nothing to show</div>
          </div> <!-- /.select-menu-list -->


          <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket css-truncate" data-tab-filter="tags">
            <div data-filterable-for="commitish-filter-field" data-filterable-type="substring">

            </div>

            <div class="select-menu-no-results">Nothing to show</div>

          </div> <!-- /.select-menu-list -->

        </div> <!-- /.select-menu-modal -->
      </div> <!-- /.select-menu-modal-holder -->
    </div> <!-- /.select-menu -->

  </div> <!-- /.scope -->

  <ul class="tabnav-tabs">
    <li><a href="/MoonScript/jQuery-ajaxTransport-XDomainRequest" class="selected tabnav-tab" highlight="repo_source">Files</a></li>
    <li><a href="/MoonScript/jQuery-ajaxTransport-XDomainRequest/commits/" class="tabnav-tab" highlight="repo_commits">Commits</a></li>
    <li><a href="/MoonScript/jQuery-ajaxTransport-XDomainRequest/branches" class="tabnav-tab" highlight="repo_branches" rel="nofollow">Branches <span class="counter ">1</span></a></li>
  </ul>

</div>

  
  
  


            
          </div>
        </div><!-- /.repohead -->

        <div id="js-repo-pjax-container" class="container context-loader-container" data-pjax-container>
          


<!-- blob contrib key: blob_contributors:v21:f809df5f6379ceb24c828a1c4dd130ee -->
<!-- blob contrib frag key: views10/v8/blob_contributors:v21:f809df5f6379ceb24c828a1c4dd130ee -->


<div id="slider">
    <div class="frame-meta">

      <p title="This is a placeholder element" class="js-history-link-replace hidden"></p>

        <div class="breadcrumb">
          <span class='bold'><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/MoonScript/jQuery-ajaxTransport-XDomainRequest/tree/8754607e5f9ab73ccc37246f0c12fed14f85bd28" class="js-slide-to" data-branch="8754607e5f9ab73ccc37246f0c12fed14f85bd28" data-direction="back" itemscope="url" rel="nofollow"><span itemprop="title">jQuery-ajaxTransport-XDomainRequest</span></a></span></span><span class="separator"> / </span><strong class="final-path">jQuery.XDomainRequest.js</strong> <span class="js-zeroclipboard zeroclipboard-button" data-clipboard-text="jQuery.XDomainRequest.js" data-copied-hint="copied!" title="copy to clipboard"><span class="mini-icon mini-icon-clipboard"></span></span>
        </div>

      <a href="/MoonScript/jQuery-ajaxTransport-XDomainRequest/find/8754607e5f9ab73ccc37246f0c12fed14f85bd28" class="js-slide-to" data-hotkey="t" style="display:none">Show File Finder</a>


        
  <div class="commit file-history-tease">
    <img class="main-avatar" height="24" src="https://secure.gravatar.com/avatar/8cf307d9c6ed1e0bfc5810369ce805d3?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
    <span class="author"><a href="/MoonScript" rel="author">MoonScript</a></span>
    <time class="js-relative-date" datetime="2011-11-17T18:16:09-08:00" title="2011-11-17 18:16:09">November 17, 2011</time>
    <div class="commit-title">
        <a href="/MoonScript/jQuery-ajaxTransport-XDomainRequest/commit/8754607e5f9ab73ccc37246f0c12fed14f85bd28" class="message">Initial commit</a>
    </div>

    <div class="participation">
      <p class="quickstat"><a href="#blob_contributors_box" rel="facebox"><strong>1</strong> contributor</a></p>
      
    </div>
    <div id="blob_contributors_box" style="display:none">
      <h2>Users on GitHub who have contributed to this file</h2>
      <ul class="facebox-user-list">
        <li>
          <img height="24" src="https://secure.gravatar.com/avatar/8cf307d9c6ed1e0bfc5810369ce805d3?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
          <a href="/MoonScript">MoonScript</a>
        </li>
      </ul>
    </div>
  </div>


    </div><!-- ./.frame-meta -->

    <div class="frames">
      <div class="frame" data-permalink-url="/MoonScript/jQuery-ajaxTransport-XDomainRequest/blob/8754607e5f9ab73ccc37246f0c12fed14f85bd28/jQuery.XDomainRequest.js" data-title="jQuery-ajaxTransport-XDomainRequest/jQuery.XDomainRequest.js at 8754607e5f9ab73ccc37246f0c12fed14f85bd28 · MoonScript/jQuery-ajaxTransport-XDomainRequest · GitHub" data-type="blob">

        <div id="files" class="bubble">
          <div class="file">
            <div class="meta">
              <div class="info">
                <span class="icon"><b class="mini-icon mini-icon-text-file"></b></span>
                <span class="mode" title="File Mode">file</span>
                  <span>86 lines (85 sloc)</span>
                <span>2.788 kb</span>
              </div>
              <div class="actions">
                <div class="button-group">
                      <a class="minibutton js-entice" href=""
                         data-entice="You must be signed in and on a branch to make or propose changes">Edit</a>
                  <a href="/MoonScript/jQuery-ajaxTransport-XDomainRequest/raw/8754607e5f9ab73ccc37246f0c12fed14f85bd28/jQuery.XDomainRequest.js" class="button minibutton " id="raw-url">Raw</a>
                    <a href="/MoonScript/jQuery-ajaxTransport-XDomainRequest/blame/8754607e5f9ab73ccc37246f0c12fed14f85bd28/jQuery.XDomainRequest.js" class="button minibutton ">Blame</a>
                  <a href="/MoonScript/jQuery-ajaxTransport-XDomainRequest/commits/8754607e5f9ab73ccc37246f0c12fed14f85bd28/jQuery.XDomainRequest.js" class="button minibutton " rel="nofollow">History</a>
                </div><!-- /.button-group -->
              </div><!-- /.actions -->

            </div>
                <div class="data type-javascript js-blob-data">
      <table cellpadding="0" cellspacing="0" class="lines">
        <tr>
          <td>
            <pre class="line_numbers"><span id="L1" rel="#L1">1</span>
<span id="L2" rel="#L2">2</span>
<span id="L3" rel="#L3">3</span>
<span id="L4" rel="#L4">4</span>
<span id="L5" rel="#L5">5</span>
<span id="L6" rel="#L6">6</span>
<span id="L7" rel="#L7">7</span>
<span id="L8" rel="#L8">8</span>
<span id="L9" rel="#L9">9</span>
<span id="L10" rel="#L10">10</span>
<span id="L11" rel="#L11">11</span>
<span id="L12" rel="#L12">12</span>
<span id="L13" rel="#L13">13</span>
<span id="L14" rel="#L14">14</span>
<span id="L15" rel="#L15">15</span>
<span id="L16" rel="#L16">16</span>
<span id="L17" rel="#L17">17</span>
<span id="L18" rel="#L18">18</span>
<span id="L19" rel="#L19">19</span>
<span id="L20" rel="#L20">20</span>
<span id="L21" rel="#L21">21</span>
<span id="L22" rel="#L22">22</span>
<span id="L23" rel="#L23">23</span>
<span id="L24" rel="#L24">24</span>
<span id="L25" rel="#L25">25</span>
<span id="L26" rel="#L26">26</span>
<span id="L27" rel="#L27">27</span>
<span id="L28" rel="#L28">28</span>
<span id="L29" rel="#L29">29</span>
<span id="L30" rel="#L30">30</span>
<span id="L31" rel="#L31">31</span>
<span id="L32" rel="#L32">32</span>
<span id="L33" rel="#L33">33</span>
<span id="L34" rel="#L34">34</span>
<span id="L35" rel="#L35">35</span>
<span id="L36" rel="#L36">36</span>
<span id="L37" rel="#L37">37</span>
<span id="L38" rel="#L38">38</span>
<span id="L39" rel="#L39">39</span>
<span id="L40" rel="#L40">40</span>
<span id="L41" rel="#L41">41</span>
<span id="L42" rel="#L42">42</span>
<span id="L43" rel="#L43">43</span>
<span id="L44" rel="#L44">44</span>
<span id="L45" rel="#L45">45</span>
<span id="L46" rel="#L46">46</span>
<span id="L47" rel="#L47">47</span>
<span id="L48" rel="#L48">48</span>
<span id="L49" rel="#L49">49</span>
<span id="L50" rel="#L50">50</span>
<span id="L51" rel="#L51">51</span>
<span id="L52" rel="#L52">52</span>
<span id="L53" rel="#L53">53</span>
<span id="L54" rel="#L54">54</span>
<span id="L55" rel="#L55">55</span>
<span id="L56" rel="#L56">56</span>
<span id="L57" rel="#L57">57</span>
<span id="L58" rel="#L58">58</span>
<span id="L59" rel="#L59">59</span>
<span id="L60" rel="#L60">60</span>
<span id="L61" rel="#L61">61</span>
<span id="L62" rel="#L62">62</span>
<span id="L63" rel="#L63">63</span>
<span id="L64" rel="#L64">64</span>
<span id="L65" rel="#L65">65</span>
<span id="L66" rel="#L66">66</span>
<span id="L67" rel="#L67">67</span>
<span id="L68" rel="#L68">68</span>
<span id="L69" rel="#L69">69</span>
<span id="L70" rel="#L70">70</span>
<span id="L71" rel="#L71">71</span>
<span id="L72" rel="#L72">72</span>
<span id="L73" rel="#L73">73</span>
<span id="L74" rel="#L74">74</span>
<span id="L75" rel="#L75">75</span>
<span id="L76" rel="#L76">76</span>
<span id="L77" rel="#L77">77</span>
<span id="L78" rel="#L78">78</span>
<span id="L79" rel="#L79">79</span>
<span id="L80" rel="#L80">80</span>
<span id="L81" rel="#L81">81</span>
<span id="L82" rel="#L82">82</span>
<span id="L83" rel="#L83">83</span>
<span id="L84" rel="#L84">84</span>
<span id="L85" rel="#L85">85</span>
<span id="L86" rel="#L86">86</span>
</pre>
          </td>
          <td width="100%">
                  <div class="highlight"><pre><div class='line' id='LC1'><span class="c1">// jQuery.XDomainRequest.js</span></div><div class='line' id='LC2'><span class="c1">// Author: Jason Moon - @JSONMOON</span></div><div class='line' id='LC3'><span class="c1">// IE8+</span></div><div class='line' id='LC4'><span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">jQuery</span><span class="p">.</span><span class="nx">support</span><span class="p">.</span><span class="nx">cors</span> <span class="o">&amp;&amp;</span> <span class="nb">window</span><span class="p">.</span><span class="nx">XDomainRequest</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC5'>	<span class="kd">var</span> <span class="nx">httpRegEx</span> <span class="o">=</span> <span class="sr">/^https?:\/\//i</span><span class="p">;</span></div><div class='line' id='LC6'>	<span class="kd">var</span> <span class="nx">getOrPostRegEx</span> <span class="o">=</span> <span class="sr">/^get|post$/i</span><span class="p">;</span></div><div class='line' id='LC7'>	<span class="kd">var</span> <span class="nx">sameSchemeRegEx</span> <span class="o">=</span> <span class="k">new</span> <span class="nb">RegExp</span><span class="p">(</span><span class="s1">&#39;^&#39;</span><span class="o">+</span><span class="nx">location</span><span class="p">.</span><span class="nx">protocol</span><span class="p">,</span> <span class="s1">&#39;i&#39;</span><span class="p">);</span></div><div class='line' id='LC8'>	<span class="kd">var</span> <span class="nx">xmlRegEx</span> <span class="o">=</span> <span class="sr">/\/xml/i</span><span class="p">;</span></div><div class='line' id='LC9'><br/></div><div class='line' id='LC10'>	<span class="c1">// ajaxTransport exists in jQuery 1.5+</span></div><div class='line' id='LC11'>	<span class="nx">jQuery</span><span class="p">.</span><span class="nx">ajaxTransport</span><span class="p">(</span><span class="s1">&#39;text html xml json&#39;</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">options</span><span class="p">,</span> <span class="nx">userOptions</span><span class="p">,</span> <span class="nx">jqXHR</span><span class="p">){</span></div><div class='line' id='LC12'>		<span class="c1">// XDomainRequests must be: asynchronous, GET or POST methods, HTTP or HTTPS protocol, and same scheme as calling page</span></div><div class='line' id='LC13'>		<span class="k">if</span> <span class="p">(</span><span class="nx">options</span><span class="p">.</span><span class="nx">crossDomain</span> <span class="o">&amp;&amp;</span> <span class="nx">options</span><span class="p">.</span><span class="nx">async</span> <span class="o">&amp;&amp;</span> <span class="nx">getOrPostRegEx</span><span class="p">.</span><span class="nx">test</span><span class="p">(</span><span class="nx">options</span><span class="p">.</span><span class="nx">type</span><span class="p">)</span> <span class="o">&amp;&amp;</span> <span class="nx">httpRegEx</span><span class="p">.</span><span class="nx">test</span><span class="p">(</span><span class="nx">userOptions</span><span class="p">.</span><span class="nx">url</span><span class="p">)</span> <span class="o">&amp;&amp;</span> <span class="nx">sameSchemeRegEx</span><span class="p">.</span><span class="nx">test</span><span class="p">(</span><span class="nx">userOptions</span><span class="p">.</span><span class="nx">url</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC14'>			<span class="kd">var</span> <span class="nx">xdr</span> <span class="o">=</span> <span class="kc">null</span><span class="p">;</span></div><div class='line' id='LC15'>			<span class="kd">var</span> <span class="nx">userType</span> <span class="o">=</span> <span class="p">(</span><span class="nx">userOptions</span><span class="p">.</span><span class="nx">dataType</span><span class="o">||</span><span class="s1">&#39;&#39;</span><span class="p">).</span><span class="nx">toLowerCase</span><span class="p">();</span></div><div class='line' id='LC16'>			<span class="k">return</span> <span class="p">{</span></div><div class='line' id='LC17'>				<span class="nx">send</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">headers</span><span class="p">,</span> <span class="nx">complete</span><span class="p">){</span></div><div class='line' id='LC18'>					<span class="nx">xdr</span> <span class="o">=</span> <span class="k">new</span> <span class="nx">XDomainRequest</span><span class="p">();</span></div><div class='line' id='LC19'>					<span class="k">if</span> <span class="p">(</span><span class="sr">/^\d+$/</span><span class="p">.</span><span class="nx">test</span><span class="p">(</span><span class="nx">userOptions</span><span class="p">.</span><span class="nx">timeout</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC20'>						<span class="nx">xdr</span><span class="p">.</span><span class="nx">timeout</span> <span class="o">=</span> <span class="nx">userOptions</span><span class="p">.</span><span class="nx">timeout</span><span class="p">;</span></div><div class='line' id='LC21'>					<span class="p">}</span></div><div class='line' id='LC22'>					<span class="nx">xdr</span><span class="p">.</span><span class="nx">ontimeout</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(){</span></div><div class='line' id='LC23'>						<span class="nx">complete</span><span class="p">(</span><span class="mi">500</span><span class="p">,</span> <span class="s1">&#39;timeout&#39;</span><span class="p">);</span></div><div class='line' id='LC24'>					<span class="p">};</span></div><div class='line' id='LC25'>					<span class="nx">xdr</span><span class="p">.</span><span class="nx">onload</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(){</span></div><div class='line' id='LC26'>						<span class="kd">var</span> <span class="nx">allResponseHeaders</span> <span class="o">=</span> <span class="s1">&#39;Content-Length: &#39;</span> <span class="o">+</span> <span class="nx">xdr</span><span class="p">.</span><span class="nx">responseText</span><span class="p">.</span><span class="nx">length</span> <span class="o">+</span> <span class="s1">&#39;\r\nContent-Type: &#39;</span> <span class="o">+</span> <span class="nx">xdr</span><span class="p">.</span><span class="nx">contentType</span><span class="p">;</span></div><div class='line' id='LC27'>						<span class="kd">var</span> <span class="nx">status</span> <span class="o">=</span> <span class="p">{</span></div><div class='line' id='LC28'>							<span class="nx">code</span><span class="o">:</span> <span class="mi">200</span><span class="p">,</span></div><div class='line' id='LC29'>							<span class="nx">message</span><span class="o">:</span> <span class="s1">&#39;success&#39;</span></div><div class='line' id='LC30'>						<span class="p">};</span></div><div class='line' id='LC31'>						<span class="kd">var</span> <span class="nx">responses</span> <span class="o">=</span> <span class="p">{</span></div><div class='line' id='LC32'>							<span class="nx">text</span><span class="o">:</span> <span class="nx">xdr</span><span class="p">.</span><span class="nx">responseText</span></div><div class='line' id='LC33'>						<span class="p">};</span></div><div class='line' id='LC34'>						<span class="cm">/*</span></div><div class='line' id='LC35'><span class="cm">						if (userType === &#39;html&#39;) {</span></div><div class='line' id='LC36'><span class="cm">							responses.html = xdr.responseText;</span></div><div class='line' id='LC37'><span class="cm">						} else</span></div><div class='line' id='LC38'><span class="cm">						*/</span></div><div class='line' id='LC39'>						<span class="k">try</span> <span class="p">{</span></div><div class='line' id='LC40'>							<span class="k">if</span> <span class="p">(</span><span class="nx">userType</span> <span class="o">===</span> <span class="s1">&#39;json&#39;</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC41'>								<span class="k">try</span> <span class="p">{</span></div><div class='line' id='LC42'>									<span class="nx">responses</span><span class="p">.</span><span class="nx">json</span> <span class="o">=</span> <span class="nx">JSON</span><span class="p">.</span><span class="nx">parse</span><span class="p">(</span><span class="nx">xdr</span><span class="p">.</span><span class="nx">responseText</span><span class="p">);</span></div><div class='line' id='LC43'>								<span class="p">}</span> <span class="k">catch</span><span class="p">(</span><span class="nx">e</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC44'>									<span class="nx">status</span><span class="p">.</span><span class="nx">code</span> <span class="o">=</span> <span class="mi">500</span><span class="p">;</span></div><div class='line' id='LC45'>									<span class="nx">status</span><span class="p">.</span><span class="nx">message</span> <span class="o">=</span> <span class="s1">&#39;parseerror&#39;</span><span class="p">;</span></div><div class='line' id='LC46'>									<span class="c1">//throw &#39;Invalid JSON: &#39; + xdr.responseText;</span></div><div class='line' id='LC47'>								<span class="p">}</span></div><div class='line' id='LC48'>							<span class="p">}</span> <span class="k">else</span> <span class="k">if</span> <span class="p">((</span><span class="nx">userType</span> <span class="o">===</span> <span class="s1">&#39;xml&#39;</span><span class="p">)</span> <span class="o">||</span> <span class="p">((</span><span class="nx">userType</span> <span class="o">!==</span> <span class="s1">&#39;text&#39;</span><span class="p">)</span> <span class="o">&amp;&amp;</span> <span class="nx">xmlRegEx</span><span class="p">.</span><span class="nx">test</span><span class="p">(</span><span class="nx">xdr</span><span class="p">.</span><span class="nx">contentType</span><span class="p">)))</span> <span class="p">{</span></div><div class='line' id='LC49'>								<span class="kd">var</span> <span class="nx">doc</span> <span class="o">=</span> <span class="k">new</span> <span class="nx">ActiveXObject</span><span class="p">(</span><span class="s1">&#39;Microsoft.XMLDOM&#39;</span><span class="p">);</span></div><div class='line' id='LC50'>								<span class="nx">doc</span><span class="p">.</span><span class="nx">async</span> <span class="o">=</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC51'>								<span class="k">try</span> <span class="p">{</span></div><div class='line' id='LC52'>									<span class="nx">doc</span><span class="p">.</span><span class="nx">loadXML</span><span class="p">(</span><span class="nx">xdr</span><span class="p">.</span><span class="nx">responseText</span><span class="p">);</span></div><div class='line' id='LC53'>								<span class="p">}</span> <span class="k">catch</span><span class="p">(</span><span class="nx">e</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC54'>									<span class="nx">doc</span> <span class="o">=</span> <span class="kc">undefined</span><span class="p">;</span></div><div class='line' id='LC55'>								<span class="p">}</span></div><div class='line' id='LC56'>								<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">doc</span> <span class="o">||</span> <span class="o">!</span><span class="nx">doc</span><span class="p">.</span><span class="nx">documentElement</span> <span class="o">||</span> <span class="nx">doc</span><span class="p">.</span><span class="nx">getElementsByTagName</span><span class="p">(</span><span class="s1">&#39;parsererror&#39;</span><span class="p">).</span><span class="nx">length</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC57'>									<span class="nx">status</span><span class="p">.</span><span class="nx">code</span> <span class="o">=</span> <span class="mi">500</span><span class="p">;</span></div><div class='line' id='LC58'>									<span class="nx">status</span><span class="p">.</span><span class="nx">message</span> <span class="o">=</span> <span class="s1">&#39;parseerror&#39;</span><span class="p">;</span></div><div class='line' id='LC59'>									<span class="k">throw</span> <span class="s1">&#39;Invalid XML: &#39;</span> <span class="o">+</span> <span class="nx">xdr</span><span class="p">.</span><span class="nx">responseText</span><span class="p">;</span></div><div class='line' id='LC60'>								<span class="p">}</span></div><div class='line' id='LC61'>								<span class="nx">responses</span><span class="p">.</span><span class="nx">xml</span> <span class="o">=</span> <span class="nx">doc</span><span class="p">;</span></div><div class='line' id='LC62'>							<span class="p">}</span></div><div class='line' id='LC63'>						<span class="p">}</span> <span class="k">catch</span><span class="p">(</span><span class="nx">parseMessage</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC64'>							<span class="k">throw</span> <span class="nx">parseMessage</span><span class="p">;</span></div><div class='line' id='LC65'>						<span class="p">}</span> <span class="k">finally</span> <span class="p">{</span></div><div class='line' id='LC66'>							<span class="nx">complete</span><span class="p">(</span><span class="nx">status</span><span class="p">.</span><span class="nx">code</span><span class="p">,</span> <span class="nx">status</span><span class="p">.</span><span class="nx">message</span><span class="p">,</span> <span class="nx">responses</span><span class="p">,</span> <span class="nx">allResponseHeaders</span><span class="p">);</span></div><div class='line' id='LC67'>						<span class="p">}</span></div><div class='line' id='LC68'>					<span class="p">};</span></div><div class='line' id='LC69'>					<span class="nx">xdr</span><span class="p">.</span><span class="nx">onerror</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(){</span></div><div class='line' id='LC70'>						<span class="nx">complete</span><span class="p">(</span><span class="mi">500</span><span class="p">,</span> <span class="s1">&#39;error&#39;</span><span class="p">,</span> <span class="p">{</span></div><div class='line' id='LC71'>							<span class="nx">text</span><span class="o">:</span> <span class="nx">xdr</span><span class="p">.</span><span class="nx">responseText</span></div><div class='line' id='LC72'>						<span class="p">});</span></div><div class='line' id='LC73'>					<span class="p">};</span></div><div class='line' id='LC74'>					<span class="nx">xdr</span><span class="p">.</span><span class="nx">open</span><span class="p">(</span><span class="nx">options</span><span class="p">.</span><span class="nx">type</span><span class="p">,</span> <span class="nx">options</span><span class="p">.</span><span class="nx">url</span><span class="p">);</span></div><div class='line' id='LC75'>					<span class="c1">//xdr.send(userOptions.data);</span></div><div class='line' id='LC76'>					<span class="nx">xdr</span><span class="p">.</span><span class="nx">send</span><span class="p">();</span></div><div class='line' id='LC77'>				<span class="p">},</span></div><div class='line' id='LC78'>				<span class="nx">abort</span><span class="o">:</span> <span class="kd">function</span><span class="p">(){</span></div><div class='line' id='LC79'>					<span class="k">if</span> <span class="p">(</span><span class="nx">xdr</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC80'>						<span class="nx">xdr</span><span class="p">.</span><span class="nx">abort</span><span class="p">();</span></div><div class='line' id='LC81'>					<span class="p">}</span></div><div class='line' id='LC82'>				<span class="p">}</span></div><div class='line' id='LC83'>			<span class="p">};</span></div><div class='line' id='LC84'>		<span class="p">}</span></div><div class='line' id='LC85'>	<span class="p">});</span></div><div class='line' id='LC86'><span class="p">}</span></div></pre></div>
          </td>
        </tr>
      </table>
  </div>

          </div>
        </div>

        <a href="#jump-to-line" rel="facebox" data-hotkey="l" class="js-jump-to-line" style="display:none">Jump to Line</a>
        <div id="jump-to-line" style="display:none">
          <h2>Jump to Line</h2>
          <form accept-charset="UTF-8" class="js-jump-to-line-form">
            <input class="textfield js-jump-to-line-field" type="text">
            <div class="full-button">
              <button type="submit" class="button">Go</button>
            </div>
          </form>
        </div>

      </div>
    </div>
</div>

<div id="js-frame-loading-template" class="frame frame-loading large-loading-area" style="display:none;">
  <img class="js-frame-loading-spinner" src="https://a248.e.akamai.net/assets.github.com/images/spinners/octocat-spinner-128.gif?1347543529" height="64" width="64">
</div>


        </div>
      </div>
      <div class="context-overlay"></div>
    </div>

      <div id="footer-push"></div><!-- hack for sticky footer -->
    </div><!-- end of wrapper - hack for sticky footer -->

      <!-- footer -->
      <div id="footer">
  <div class="container clearfix">

      <dl class="footer_nav">
        <dt>GitHub</dt>
        <dd><a href="https://github.com/about">About us</a></dd>
        <dd><a href="https://github.com/blog">Blog</a></dd>
        <dd><a href="https://github.com/contact">Contact &amp; support</a></dd>
        <dd><a href="http://enterprise.github.com/">GitHub Enterprise</a></dd>
        <dd><a href="http://status.github.com/">Site status</a></dd>
      </dl>

      <dl class="footer_nav">
        <dt>Applications</dt>
        <dd><a href="http://mac.github.com/">GitHub for Mac</a></dd>
        <dd><a href="http://windows.github.com/">GitHub for Windows</a></dd>
        <dd><a href="http://eclipse.github.com/">GitHub for Eclipse</a></dd>
        <dd><a href="http://mobile.github.com/">GitHub mobile apps</a></dd>
      </dl>

      <dl class="footer_nav">
        <dt>Services</dt>
        <dd><a href="http://get.gaug.es/">Gauges: Web analytics</a></dd>
        <dd><a href="http://speakerdeck.com">Speaker Deck: Presentations</a></dd>
        <dd><a href="https://gist.github.com">Gist: Code snippets</a></dd>
        <dd><a href="http://jobs.github.com/">Job board</a></dd>
      </dl>

      <dl class="footer_nav">
        <dt>Documentation</dt>
        <dd><a href="http://help.github.com/">GitHub Help</a></dd>
        <dd><a href="http://developer.github.com/">Developer API</a></dd>
        <dd><a href="http://github.github.com/github-flavored-markdown/">GitHub Flavored Markdown</a></dd>
        <dd><a href="http://pages.github.com/">GitHub Pages</a></dd>
      </dl>

      <dl class="footer_nav">
        <dt>More</dt>
        <dd><a href="http://training.github.com/">Training</a></dd>
        <dd><a href="https://github.com/edu">Students &amp; teachers</a></dd>
        <dd><a href="http://shop.github.com">The Shop</a></dd>
        <dd><a href="/plans">Plans &amp; pricing</a></dd>
        <dd><a href="http://octodex.github.com/">The Octodex</a></dd>
      </dl>

      <hr class="footer-divider">


    <p class="right">&copy; 2013 <span title="0.06229s from fe13.rs.github.com">GitHub</span>, Inc. All rights reserved.</p>
    <a class="left" href="https://github.com/">
      <span class="mega-icon mega-icon-invertocat"></span>
    </a>
    <ul id="legal">
        <li><a href="https://github.com/site/terms">Terms of Service</a></li>
        <li><a href="https://github.com/site/privacy">Privacy</a></li>
        <li><a href="https://github.com/security">Security</a></li>
    </ul>

  </div><!-- /.container -->

</div><!-- /.#footer -->


    <div class="fullscreen-overlay js-fullscreen-overlay" id="fullscreen_overlay">
  <div class="fullscreen-container js-fullscreen-container">
    <div class="textarea-wrap">
      <textarea name="fullscreen-contents" id="fullscreen-contents" class="js-fullscreen-contents" placeholder="" data-suggester="fullscreen_suggester"></textarea>
          <div class="suggester-container">
              <div class="suggester fullscreen-suggester js-navigation-container" id="fullscreen_suggester"
                 data-url="/MoonScript/jQuery-ajaxTransport-XDomainRequest/suggestions/commit">
              </div>
          </div>
    </div>
  </div>
  <div class="fullscreen-sidebar">
    <a href="#" class="exit-fullscreen js-exit-fullscreen tooltipped leftwards" title="Exit Zen Mode">
      <span class="mega-icon mega-icon-normalscreen"></span>
    </a>
    <a href="#" class="theme-switcher js-theme-switcher tooltipped leftwards"
      title="Switch themes">
      <span class="mini-icon mini-icon-brightness"></span>
    </a>
  </div>
</div>



    <div id="ajax-error-message" class="flash flash-error">
      <span class="mini-icon mini-icon-exclamation"></span>
      Something went wrong with that request. Please try again.
      <a href="#" class="mini-icon mini-icon-remove-close ajax-error-dismiss"></a>
    </div>

    
    
    <span id='server_response_time' data-time='0.06290' data-host='fe13'></span>
    
  </body>
</html>

