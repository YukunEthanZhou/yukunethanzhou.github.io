---
layout: archive
title: "Art"
permalink: /art/
author_profile: true
---

This page collects selected creative work in one place.

Photos
------

<div class="photo-gallery">
{% for photo in site.static_files %}
  {% if photo.path contains "/images/photos/" %}
    <figure class="photo-gallery__item">
      <img src="{{ photo.path | relative_url }}" alt="Photography by Yukun Zhou" loading="lazy" decoding="async">
    </figure>
  {% endif %}
{% endfor %}
</div>

{% include base_path %}

{% for post in site.art %}
  {% include archive-single.html %}
{% endfor %}
