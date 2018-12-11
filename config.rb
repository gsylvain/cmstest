# Activate and configure extensions
# https://middlemanapp.com/advanced/configuration/#configuring-extensions

# Per-page layout changes
page '/*.xml', layout: false
page '/*.json', layout: false
page '/*.txt', layout: false
page "/profit-guide/*", :layout => "profit-layout"
page "/profit-guide/2016/*", :layout => "articles"
page "/profit-guide/2017/*", :layout => "articles"
page "/profit-guide/2018/*", :layout => "articles"





# Use Webpack as asset pipeline
activate :external_pipeline,
         name: :webpack,
         command: build? ?  "yarn run build" : "yarn run develop",
         source: ".tmp/dist",
         latency: 1

configure :build do
  # Enable cache buster (except for images)
  activate :asset_hash, ignore: [/\.jpg\Z/, /\.png\Z/]
end

# ignore typescripts
ignore /(.*)\.ts/