---
layout: archive
title: "Publications"
permalink: /publications/
author_profile: true
---

{% if site.author.googlescholar %}
  <div class="wordwrap">You can also find my articles on <a href="{{site.author.googlescholar}}">my Google Scholar profile</a>.</div>
{% endif %}

{% include base_path %}

{% assign publication_tag_candidates = "robotic manipulation|robotic navigation|motion planning and control|autonomous driving" | split: "|" %}

<div class="publication-tabs" role="tablist" aria-label="Publication categories">
  <button class="publication-tabs__tab is-active" type="button" role="tab" aria-selected="true" data-publication-tag="all">All Papers</button>
  {% for candidate in publication_tag_candidates %}
    {% assign tagged_publications = site.publications | where_exp: "item", "item.tags contains candidate" %}
    {% if tagged_publications.size > 0 %}
      <button class="publication-tabs__tab" type="button" role="tab" aria-selected="false" data-publication-tag="{{ candidate | slugify }}">{{ candidate }}</button>
    {% endif %}
  {% endfor %}
</div>

<div class="publication-categories">
  {% if site.publications.size > 0 %}
    <section class="publication-category publication-category--all" data-publication-tag="all">
      <h2 id="all-papers" class="archive__subtitle">All Papers</h2>
      {% for post in site.publications reversed %}
        {% include archive-single.html%}
      {% endfor %}
    </section>
  {% endif %}

  {% for candidate in publication_tag_candidates %}
    {% assign tagged_publications = site.publications | where_exp: "item", "item.tags contains candidate" %}
    {% if tagged_publications.size > 0 %}
      <section class="publication-category" data-publication-tag="{{ candidate | slugify }}">
        <h2 id="{{ candidate | slugify }}" class="archive__subtitle">{{ candidate | capitalize }}</h2>
        {% for post in tagged_publications reversed %}
          {% include archive-single.html%}
        {% endfor %}
      </section>
    {% endif %}
  {% endfor %}
</div>
