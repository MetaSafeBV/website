---
layout: doc
title: News
---

# Latest News

Stay updated with the latest developments, achievements, and milestones from MetaSafe as we revolutionize protective technology.

<script setup>
import NewsPage from '../../components/news/news-page.vue'
import newsData from '../generated/news.json'
</script>

<news-page :items="newsData.news" />
