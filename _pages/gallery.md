---
layout: page
permalink: /gallery/
title: Gallery
description: Moments from campus life
nav: true
nav_order: 3
---

<div class="row">
  {% assign gallery_images = "gsd.jpg,gsd111.jpg,微信图片_20260808025707_574_37.jpg" | split: "," %}
  {% for image in gallery_images %}
    <div class="col-sm-6 mt-3 mt-md-0">
      {% assign image_path = "assets/img/gallery/" | append: image %}
      {% include figure.liquid loading="eager" path=image_path class="img-fluid rounded z-depth-1" alt=image %}
    </div>
  {% endfor %}
</div>
