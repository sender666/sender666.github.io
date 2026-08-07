---
layout: page
permalink: /gallery/
title: Gallery
description: Moments from campus life
nav: true
nav_order: 3
---

<div class="row">
  {% assign gallery_images = "gsd.jpg,1.jpg,3.jpg,4.jpg" | split: "," %}
  {% for image in gallery_images %}
    <div class="col-sm-6 mt-3 mt-md-0">
      {% include figure.liquid loading="eager" path="assets/img/gallery/" class="img-fluid rounded z-depth-1" alt=image %}
    </div>
  {% endfor %}
</div>
