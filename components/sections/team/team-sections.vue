<template>
  <div class="team container padding-top padding-bottom">
    <ul v-for="(t, i) in $options.team" :key="i" class="team__list">
      <div class="team__img-wrapper">
        <img  class="team__img" :src="t.srcset" />
      </div>
      <div class="team__name text-main">
        {{ t.name }}
      </div>
      <div class="team__post text-main">
        {{ t.post }}
      </div>
    </ul>
  </div>
</template>

<script>
export default {
  team: [
    {
      name: 'Александр Иваньшин',
      post: 'менеджер',
      srcset: './gif/ivanshin.gif',
    },
    {
      name: 'Дмитрий Денисов',
      post: 'QA-инженер',
      srcset: './gif/denisov.gif',
    },
    {
      name: 'Анатолий Тихомиров',
      post: 'менеджер',
      srcset: './gif/tihomirov.gif',
    },
    {
      name: 'Никита Легостаев',
      post: 'фронтэнд-разработчик',
      srcset: './gif/legostaev.gif',
    },
    {
      name: 'Дмитрий Матыцин',
      post: 'бекэнд-разработчик',
      srcset: './gif/ivanshin.gif',
    },
    {
      name: 'Дмитрий Голубев',
      post: 'фронтэнд-разработчик',
      srcset: './gif/golubev.gif',
    },
    {
      name: 'Владимир Сидоров',
      post: 'бекэнд-разработчик',
      srcset: './gif/sidorov.gif',
    },
    {
      name: 'Сергей Майнер',
      post: 'дизайнер',
      srcset: './gif/mayner.gif',
    },
    {
      name: 'Илья Лебедев',
      post: 'менеджер',
      srcset: './gif/lebedev.gif',
    },
  ],
}
</script>

<style lang="scss">
@import 'team-sections';
</style>
