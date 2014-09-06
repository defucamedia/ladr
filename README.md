#Deployment
##nginx
```
server {
  location / {
          try_files $uri $uri/ /index.html?/$request_uri;
  }
}
```

##Apache .htaccess
```
Options FollowSymLinks

<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```
`AllowOverride All` has to be set for the directory.