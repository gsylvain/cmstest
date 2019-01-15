How To Make A New Profit Guide Post

* Start by making the folder structure (copy the current style)
* Easiest way to do that is clone an existing folder to bring the index.html with it
* Edit your new Index.html file
* The rest of the page is built using the source/layouts/profit-layout.erb
* Title is written at the top using YAML - (Middleman Frontmatter)
* Just edit the title but leave the lines  (---) above and below...
* Edit meta description tag
* Edit Schema.Org info 
* Now take the article content that has been written and save it as a markdown file
* Import that markdown file as a “partial” in the middle of the index.html and it will generate the appropriate HTML (simple stuff only, lists, headers, paragraphs)... add html for where images go
* Go back to index.html  - at the bottom of index.html is where the Sidebar table of contents links is - make sure to update these, typically I do one section for each H2 / section-block

