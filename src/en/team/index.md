---
layout: doc
title: Team
---

<script setup>
import TeamPageContent from '../../components/team/team-page-content.vue'
import { TEAM_MEMBERS } from '../../components/team/team-page-data.ts'
</script>

<team-page-content :team-members="TEAM_MEMBERS" />
