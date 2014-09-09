#Deployment
##nginx
```
server {
	if ($request_uri = /index.html) {
		return 301 localhost:8080;
	}
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

	RewriteRule ^index\.html$ / [NC,R,L]
	RewriteRule ^/projects/(.*).html?$ /projects/$1 [NC,R,L];
	RewriteRule ^/about.html?$ /about [NC,R,L];
	RewriteRule ^/contact.html?$ /contact [NC,R,L];
</IfModule>
```
`AllowOverride All` has to be set for the directory.