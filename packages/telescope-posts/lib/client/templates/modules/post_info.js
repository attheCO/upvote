Template.post_info.helpers({
  pointsUnitDisplayText: function(){
    return this.upvotes === 1 ? i18n.t('vote') : i18n.t('votes');
  }
});
