<template>
    <div class="game">

        <game-controls></game-controls>
        <br/><br/><br/>
        <div class="container">

            <div v-show="!game.round">
                <div v-show="!data.game_complete" class="alert alert-warning"><strong>Warning!</strong> This is an incomplete game. You can still play, but it won't be the full experience.</div>
                <h1 class="text-center">{{data.game_title}}</h1>
                <h4 class="text-center">{{data.game_comments}}</h4><br/>
                <table class="table table-condensed">
                    <thead>
                        <tr>
                            <th> Jeopardy! Round</th>
                            <th># of Clues</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr
                            v-for="i in 6"
                            :class="{warning: data['category_J_' + (i+1)].clue_count == 4, danger: data['category_J_' + (i+1)].clue_count &lt;= 3}">
                            <td class="category-name">{{data['category_J_' + (i+1)].category_name}}</td>
                            <td class="category-count">{{data['category_J_' + (i+1)].clue_count}} / 5</td>
                        </tr>
                    </tbody>
                </table>
                <table class="table table-condensed">
                    <thead>
                        <tr>
                            <th>Double Jeopardy! Round</th>
                            <th># of Clues</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr
                            v-for="i in 6"
                            :class="{warning: data['category_DJ_' + (i+1)].clue_count == 4, danger: data['category_DJ_' + (i+1)].clue_count &lt;= 3}">
                            <td class="category-name">{{data['category_DJ_' + (i+1)].category_name}}</td>
                            <td class="category-count">{{data['category_DJ_' + (i+1)].clue_count}} / 5</td>
                        </tr>
                    </tbody>
                </table>
                <table class="table">
                    <thead>
                        <tr>
                            <th>Final Jeopardy! Round</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{{data.category_FJ_1.category_name}}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div v-show="game.round == 'J'">
                <game-questions></game-questions>
            </div>

            <div v-show="game.round == 'DJ'">
                <div class="row">
                    <div class="col-md-2">
                        <div class="panel panel-primary">
                            <div class="panel-heading"><strong>{{data.category_DJ_1.category_name}}</strong></div>
                            <div ng-show="data.category_DJ_1.category_comments" style="padding:5px" class="panel-body">{{data.category_DJ_1.category_comments}}</div>
                        </div>
                    </div>
                    <div class="col-md-2">
                        <div class="panel panel-primary">
                            <div class="panel-heading"><strong>{{data.category_DJ_2.category_name}}</strong></div>
                            <div ng-show="data.category_DJ_2.category_comments" style="padding:5px" class="panel-body">{{data.category_DJ_2.category_comments}}</div>
                        </div>
                    </div>
                    <div class="col-md-2">
                        <div class="panel panel-primary">
                            <div class="panel-heading"><strong>{{data.category_DJ_3.category_name}}</strong></div>
                            <div ng-show="data.category_DJ_3.category_comments" style="padding:5px" class="panel-body">{{data.category_DJ_3.category_comments}}</div>
                        </div>
                    </div>
                    <div class="col-md-2">
                        <div class="panel panel-primary">
                            <div class="panel-heading"><strong>{{data.category_DJ_4.category_name}}</strong></div>
                            <div ng-show="data.category_DJ_4.category_comments" style="padding:5px" class="panel-body">{{data.category_DJ_4.category_comments}}</div>
                        </div>
                    </div>
                    <div class="col-md-2">
                        <div class="panel panel-primary">
                            <div class="panel-heading"><strong>{{data.category_DJ_5.category_name}}</strong></div>
                            <div ng-show="data.category_DJ_5.category_comments" style="padding:5px" class="panel-body">{{data.category_DJ_5.category_comments}}</div>
                        </div>
                    </div>
                    <div class="col-md-2">
                        <div class="panel panel-primary">
                            <div class="panel-heading"><strong>{{data.category_DJ_6.category_name}}</strong></div>
                            <div ng-show="data.category_DJ_6.category_comments" style="padding:5px" class="panel-body">{{data.category_DJ_6.category_comments}}</div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-2">
                        <div ng-click="startClue(&quot;clue_DJ_1_1&quot;)" ng-show="data.clue_DJ_1_1 &amp;&amp; !game.clue_DJ_1_1" style="cursor:pointer;" class="panel panel-default host-clue">
                            <div class="panel-heading clearfix"><strong class="pull-left">{{ '400' | currency:'$':0 }}</strong>
                                <div ng-show="data.clue_DJ_1_1.daily_double" class="label label-warning pull-right">DD</div>
                                <div class="pull-right visible-xs visible-sm"><em>{{ data.category_DJ_1.category_name | lowercase }}</em></div>
                            </div>
                            <div style="padding:5px;" class="panel-body text-center">{{ data.clue_DJ_1_1.clue_text }}</div>
                        </div>
                    </div>
                    <div class="col-md-2">
                        <div ng-click="startClue(&quot;clue_DJ_2_1&quot;)" ng-show="data.clue_DJ_2_1 &amp;&amp; !game.clue_DJ_2_1" style="cursor:pointer;" class="panel panel-default host-clue">
                            <div class="panel-heading clearfix"><strong class="pull-left">{{ '400' | currency:'$':0 }}</strong>
                                <div ng-show="data.clue_DJ_2_1.daily_double" class="label label-warning pull-right">DD</div>
                                <div class="pull-right visible-xs visible-sm"><em>{{ data.category_DJ_2.category_name | lowercase }}</em></div>
                            </div>
                            <div style="padding:5px;" class="panel-body text-center">{{ data.clue_DJ_2_1.clue_text }}</div>
                        </div>
                    </div>
                    <div class="col-md-2">
                        <div ng-click="startClue(&quot;clue_DJ_3_1&quot;)" ng-show="data.clue_DJ_3_1 &amp;&amp; !game.clue_DJ_3_1" style="cursor:pointer;" class="panel panel-default host-clue">
                            <div class="panel-heading clearfix"><strong class="pull-left">{{ '400' | currency:'$':0 }}</strong>
                                <div ng-show="data.clue_DJ_3_1.daily_double" class="label label-warning pull-right">DD</div>
                                <div class="pull-right visible-xs visible-sm"><em>{{ data.category_DJ_3.category_name | lowercase }}</em></div>
                            </div>
                            <div style="padding:5px;" class="panel-body text-center">{{ data.clue_DJ_3_1.clue_text }}</div>
                        </div>
                    </div>
                    <div class="col-md-2">
                        <div ng-click="startClue(&quot;clue_DJ_4_1&quot;)" ng-show="data.clue_DJ_4_1 &amp;&amp; !game.clue_DJ_4_1" style="cursor:pointer;" class="panel panel-default host-clue">
                            <div class="panel-heading clearfix"><strong class="pull-left">{{ '400' | currency:'$':0 }}</strong>
                                <div ng-show="data.clue_DJ_4_1.daily_double" class="label label-warning pull-right">DD</div>
                                <div class="pull-right visible-xs visible-sm"><em>{{ data.category_DJ_4.category_name | lowercase }}</em></div>
                            </div>
                            <div style="padding:5px;" class="panel-body text-center">{{ data.clue_DJ_4_1.clue_text }}</div>
                        </div>
                    </div>
                    <div class="col-md-2">
                        <div ng-click="startClue(&quot;clue_DJ_5_1&quot;)" ng-show="data.clue_DJ_5_1 &amp;&amp; !game.clue_DJ_5_1" style="cursor:pointer;" class="panel panel-default host-clue">
                            <div class="panel-heading clearfix"><strong class="pull-left">{{ '400' | currency:'$':0 }}</strong>
                                <div ng-show="data.clue_DJ_5_1.daily_double" class="label label-warning pull-right">DD</div>
                                <div class="pull-right visible-xs visible-sm"><em>{{ data.category_DJ_5.category_name | lowercase }}</em></div>
                            </div>
                            <div style="padding:5px;" class="panel-body text-center">{{ data.clue_DJ_5_1.clue_text }}</div>
                        </div>
                    </div>
                    <div class="col-md-2">
                        <div ng-click="startClue(&quot;clue_DJ_6_1&quot;)" ng-show="data.clue_DJ_6_1 &amp;&amp; !game.clue_DJ_6_1" style="cursor:pointer;" class="panel panel-default host-clue">
                            <div class="panel-heading clearfix"><strong class="pull-left">{{ '400' | currency:'$':0 }}</strong>
                                <div ng-show="data.clue_DJ_6_1.daily_double" class="label label-warning pull-right">DD</div>
                                <div class="pull-right visible-xs visible-sm"><em>{{ data.category_DJ_6.category_name | lowercase }}</em></div>
                            </div>
                            <div style="padding:5px;" class="panel-body text-center">{{ data.clue_DJ_6_1.clue_text }}</div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-2">
                        <div ng-click="startClue(&quot;clue_DJ_1_2&quot;)" ng-show="data.clue_DJ_1_2 &amp;&amp; !game.clue_DJ_1_2" style="cursor:pointer;" class="panel panel-default host-clue">
                            <div class="panel-heading clearfix"><strong class="pull-left">{{ '800' | currency:'$':0 }}</strong>
                                <div ng-show="data.clue_DJ_1_2.daily_double" class="label label-warning pull-right">DD</div>
                                <div class="pull-right visible-xs visible-sm"><em>{{ data.category_DJ_1.category_name | lowercase }}</em></div>
                            </div>
                            <div style="padding:5px;" class="panel-body text-center">{{ data.clue_DJ_1_2.clue_text }}</div>
                        </div>
                    </div>
                    <div class="col-md-2">
                        <div ng-click="startClue(&quot;clue_DJ_2_2&quot;)" ng-show="data.clue_DJ_2_2 &amp;&amp; !game.clue_DJ_2_2" style="cursor:pointer;" class="panel panel-default host-clue">
                            <div class="panel-heading clearfix"><strong class="pull-left">{{ '800' | currency:'$':0 }}</strong>
                                <div ng-show="data.clue_DJ_2_2.daily_double" class="label label-warning pull-right">DD</div>
                                <div class="pull-right visible-xs visible-sm"><em>{{ data.category_DJ_2.category_name | lowercase }}</em></div>
                            </div>
                            <div style="padding:5px;" class="panel-body text-center">{{ data.clue_DJ_2_2.clue_text }}</div>
                        </div>
                    </div>
                    <div class="col-md-2">
                        <div ng-click="startClue(&quot;clue_DJ_3_2&quot;)" ng-show="data.clue_DJ_3_2 &amp;&amp; !game.clue_DJ_3_2" style="cursor:pointer;" class="panel panel-default host-clue">
                            <div class="panel-heading clearfix"><strong class="pull-left">{{ '800' | currency:'$':0 }}</strong>
                                <div ng-show="data.clue_DJ_3_2.daily_double" class="label label-warning pull-right">DD</div>
                                <div class="pull-right visible-xs visible-sm"><em>{{ data.category_DJ_3.category_name | lowercase }}</em></div>
                            </div>
                            <div style="padding:5px;" class="panel-body text-center">{{ data.clue_DJ_3_2.clue_text }}</div>
                        </div>
                    </div>
                    <div class="col-md-2">
                        <div ng-click="startClue(&quot;clue_DJ_4_2&quot;)" ng-show="data.clue_DJ_4_2 &amp;&amp; !game.clue_DJ_4_2" style="cursor:pointer;" class="panel panel-default host-clue">
                            <div class="panel-heading clearfix"><strong class="pull-left">{{ '800' | currency:'$':0 }}</strong>
                                <div ng-show="data.clue_DJ_4_2.daily_double" class="label label-warning pull-right">DD</div>
                                <div class="pull-right visible-xs visible-sm"><em>{{ data.category_DJ_4.category_name | lowercase }}</em></div>
                            </div>
                            <div style="padding:5px;" class="panel-body text-center">{{ data.clue_DJ_4_2.clue_text }}</div>
                        </div>
                    </div>
                    <div class="col-md-2">
                        <div ng-click="startClue(&quot;clue_DJ_5_2&quot;)" ng-show="data.clue_DJ_5_2 &amp;&amp; !game.clue_DJ_5_2" style="cursor:pointer;" class="panel panel-default host-clue">
                            <div class="panel-heading clearfix"><strong class="pull-left">{{ '800' | currency:'$':0 }}</strong>
                                <div ng-show="data.clue_DJ_5_2.daily_double" class="label label-warning pull-right">DD</div>
                                <div class="pull-right visible-xs visible-sm"><em>{{ data.category_DJ_5.category_name | lowercase }}</em></div>
                            </div>
                            <div style="padding:5px;" class="panel-body text-center">{{ data.clue_DJ_5_2.clue_text }}</div>
                        </div>
                    </div>
                    <div class="col-md-2">
                        <div ng-click="startClue(&quot;clue_DJ_6_2&quot;)" ng-show="data.clue_DJ_6_2 &amp;&amp; !game.clue_DJ_6_2" style="cursor:pointer;" class="panel panel-default host-clue">
                            <div class="panel-heading clearfix"><strong class="pull-left">{{ '800' | currency:'$':0 }}</strong>
                                <div ng-show="data.clue_DJ_6_2.daily_double" class="label label-warning pull-right">DD</div>
                                <div class="pull-right visible-xs visible-sm"><em>{{ data.category_DJ_6.category_name | lowercase }}</em></div>
                            </div>
                            <div style="padding:5px;" class="panel-body text-center">{{ data.clue_DJ_6_2.clue_text }}</div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-2">
                        <div ng-click="startClue(&quot;clue_DJ_1_3&quot;)" ng-show="data.clue_DJ_1_3 &amp;&amp; !game.clue_DJ_1_3" style="cursor:pointer;" class="panel panel-default host-clue">
                            <div class="panel-heading clearfix"><strong class="pull-left">{{ '1200' | currency:'$':0 }}</strong>
                                <div ng-show="data.clue_DJ_1_3.daily_double" class="label label-warning pull-right">DD</div>
                                <div class="pull-right visible-xs visible-sm"><em>{{ data.category_DJ_1.category_name | lowercase }}</em></div>
                            </div>
                            <div style="padding:5px;" class="panel-body text-center">{{ data.clue_DJ_1_3.clue_text }}</div>
                        </div>
                    </div>
                    <div class="col-md-2">
                        <div ng-click="startClue(&quot;clue_DJ_2_3&quot;)" ng-show="data.clue_DJ_2_3 &amp;&amp; !game.clue_DJ_2_3" style="cursor:pointer;" class="panel panel-default host-clue">
                            <div class="panel-heading clearfix"><strong class="pull-left">{{ '1200' | currency:'$':0 }}</strong>
                                <div ng-show="data.clue_DJ_2_3.daily_double" class="label label-warning pull-right">DD</div>
                                <div class="pull-right visible-xs visible-sm"><em>{{ data.category_DJ_2.category_name | lowercase }}</em></div>
                            </div>
                            <div style="padding:5px;" class="panel-body text-center">{{ data.clue_DJ_2_3.clue_text }}</div>
                        </div>
                    </div>
                    <div class="col-md-2">
                        <div ng-click="startClue(&quot;clue_DJ_3_3&quot;)" ng-show="data.clue_DJ_3_3 &amp;&amp; !game.clue_DJ_3_3" style="cursor:pointer;" class="panel panel-default host-clue">
                            <div class="panel-heading clearfix"><strong class="pull-left">{{ '1200' | currency:'$':0 }}</strong>
                                <div ng-show="data.clue_DJ_3_3.daily_double" class="label label-warning pull-right">DD</div>
                                <div class="pull-right visible-xs visible-sm"><em>{{ data.category_DJ_3.category_name | lowercase }}</em></div>
                            </div>
                            <div style="padding:5px;" class="panel-body text-center">{{ data.clue_DJ_3_3.clue_text }}</div>
                        </div>
                    </div>
                    <div class="col-md-2">
                        <div ng-click="startClue(&quot;clue_DJ_4_3&quot;)" ng-show="data.clue_DJ_4_3 &amp;&amp; !game.clue_DJ_4_3" style="cursor:pointer;" class="panel panel-default host-clue">
                            <div class="panel-heading clearfix"><strong class="pull-left">{{ '1200' | currency:'$':0 }}</strong>
                                <div ng-show="data.clue_DJ_4_3.daily_double" class="label label-warning pull-right">DD</div>
                                <div class="pull-right visible-xs visible-sm"><em>{{ data.category_DJ_4.category_name | lowercase }}</em></div>
                            </div>
                            <div style="padding:5px;" class="panel-body text-center">{{ data.clue_DJ_4_3.clue_text }}</div>
                        </div>
                    </div>
                    <div class="col-md-2">
                        <div ng-click="startClue(&quot;clue_DJ_5_3&quot;)" ng-show="data.clue_DJ_5_3 &amp;&amp; !game.clue_DJ_5_3" style="cursor:pointer;" class="panel panel-default host-clue">
                            <div class="panel-heading clearfix"><strong class="pull-left">{{ '1200' | currency:'$':0 }}</strong>
                                <div ng-show="data.clue_DJ_5_3.daily_double" class="label label-warning pull-right">DD</div>
                                <div class="pull-right visible-xs visible-sm"><em>{{ data.category_DJ_5.category_name | lowercase }}</em></div>
                            </div>
                            <div style="padding:5px;" class="panel-body text-center">{{ data.clue_DJ_5_3.clue_text }}</div>
                        </div>
                    </div>
                    <div class="col-md-2">
                        <div ng-click="startClue(&quot;clue_DJ_6_3&quot;)" ng-show="data.clue_DJ_6_3 &amp;&amp; !game.clue_DJ_6_3" style="cursor:pointer;" class="panel panel-default host-clue">
                            <div class="panel-heading clearfix"><strong class="pull-left">{{ '1200' | currency:'$':0 }}</strong>
                                <div ng-show="data.clue_DJ_6_3.daily_double" class="label label-warning pull-right">DD</div>
                                <div class="pull-right visible-xs visible-sm"><em>{{ data.category_DJ_6.category_name | lowercase }}</em></div>
                            </div>
                            <div style="padding:5px;" class="panel-body text-center">{{ data.clue_DJ_6_3.clue_text }}</div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-2">
                        <div ng-click="startClue(&quot;clue_DJ_1_4&quot;)" ng-show="data.clue_DJ_1_4 &amp;&amp; !game.clue_DJ_1_4" style="cursor:pointer;" class="panel panel-default host-clue">
                            <div class="panel-heading clearfix"><strong class="pull-left">{{ '1600' | currency:'$':0 }}</strong>
                                <div ng-show="data.clue_DJ_1_4.daily_double" class="label label-warning pull-right">DD</div>
                                <div class="pull-right visible-xs visible-sm"><em>{{ data.category_DJ_1.category_name | lowercase }}</em></div>
                            </div>
                            <div style="padding:5px;" class="panel-body text-center">{{ data.clue_DJ_1_4.clue_text }}</div>
                        </div>
                    </div>
                    <div class="col-md-2">
                        <div ng-click="startClue(&quot;clue_DJ_2_4&quot;)" ng-show="data.clue_DJ_2_4 &amp;&amp; !game.clue_DJ_2_4" style="cursor:pointer;" class="panel panel-default host-clue">
                            <div class="panel-heading clearfix"><strong class="pull-left">{{ '1600' | currency:'$':0 }}</strong>
                                <div ng-show="data.clue_DJ_2_4.daily_double" class="label label-warning pull-right">DD</div>
                                <div class="pull-right visible-xs visible-sm"><em>{{ data.category_DJ_2.category_name | lowercase }}</em></div>
                            </div>
                            <div style="padding:5px;" class="panel-body text-center">{{ data.clue_DJ_2_4.clue_text }}</div>
                        </div>
                    </div>
                    <div class="col-md-2">
                        <div ng-click="startClue(&quot;clue_DJ_3_4&quot;)" ng-show="data.clue_DJ_3_4 &amp;&amp; !game.clue_DJ_3_4" style="cursor:pointer;" class="panel panel-default host-clue">
                            <div class="panel-heading clearfix"><strong class="pull-left">{{ '1600' | currency:'$':0 }}</strong>
                                <div ng-show="data.clue_DJ_3_4.daily_double" class="label label-warning pull-right">DD</div>
                                <div class="pull-right visible-xs visible-sm"><em>{{ data.category_DJ_3.category_name | lowercase }}</em></div>
                            </div>
                            <div style="padding:5px;" class="panel-body text-center">{{ data.clue_DJ_3_4.clue_text }}</div>
                        </div>
                    </div>
                    <div class="col-md-2">
                        <div ng-click="startClue(&quot;clue_DJ_4_4&quot;)" ng-show="data.clue_DJ_4_4 &amp;&amp; !game.clue_DJ_4_4" style="cursor:pointer;" class="panel panel-default host-clue">
                            <div class="panel-heading clearfix"><strong class="pull-left">{{ '1600' | currency:'$':0 }}</strong>
                                <div ng-show="data.clue_DJ_4_4.daily_double" class="label label-warning pull-right">DD</div>
                                <div class="pull-right visible-xs visible-sm"><em>{{ data.category_DJ_4.category_name | lowercase }}</em></div>
                            </div>
                            <div style="padding:5px;" class="panel-body text-center">{{ data.clue_DJ_4_4.clue_text }}</div>
                        </div>
                    </div>
                    <div class="col-md-2">
                        <div ng-click="startClue(&quot;clue_DJ_5_4&quot;)" ng-show="data.clue_DJ_5_4 &amp;&amp; !game.clue_DJ_5_4" style="cursor:pointer;" class="panel panel-default host-clue">
                            <div class="panel-heading clearfix"><strong class="pull-left">{{ '1600' | currency:'$':0 }}</strong>
                                <div ng-show="data.clue_DJ_5_4.daily_double" class="label label-warning pull-right">DD</div>
                                <div class="pull-right visible-xs visible-sm"><em>{{ data.category_DJ_5.category_name | lowercase }}</em></div>
                            </div>
                            <div style="padding:5px;" class="panel-body text-center">{{ data.clue_DJ_5_4.clue_text }}</div>
                        </div>
                    </div>
                    <div class="col-md-2">
                        <div ng-click="startClue(&quot;clue_DJ_6_4&quot;)" ng-show="data.clue_DJ_6_4 &amp;&amp; !game.clue_DJ_6_4" style="cursor:pointer;" class="panel panel-default host-clue">
                            <div class="panel-heading clearfix"><strong class="pull-left">{{ '1600' | currency:'$':0 }}</strong>
                                <div ng-show="data.clue_DJ_6_4.daily_double" class="label label-warning pull-right">DD</div>
                                <div class="pull-right visible-xs visible-sm"><em>{{ data.category_DJ_6.category_name | lowercase }}</em></div>
                            </div>
                            <div style="padding:5px;" class="panel-body text-center">{{ data.clue_DJ_6_4.clue_text }}</div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-2">
                        <div ng-click="startClue(&quot;clue_DJ_1_5&quot;)" ng-show="data.clue_DJ_1_5 &amp;&amp; !game.clue_DJ_1_5" style="cursor:pointer;" class="panel panel-default host-clue">
                            <div class="panel-heading clearfix"><strong class="pull-left">{{ '2000' | currency:'$':0 }}</strong>
                                <div ng-show="data.clue_DJ_1_5.daily_double" class="label label-warning pull-right">DD</div>
                                <div class="pull-right visible-xs visible-sm"><em>{{ data.category_DJ_1.category_name | lowercase }}</em></div>
                            </div>
                            <div style="padding:5px;" class="panel-body text-center">{{ data.clue_DJ_1_5.clue_text }}</div>
                        </div>
                    </div>
                    <div class="col-md-2">
                        <div ng-click="startClue(&quot;clue_DJ_2_5&quot;)" ng-show="data.clue_DJ_2_5 &amp;&amp; !game.clue_DJ_2_5" style="cursor:pointer;" class="panel panel-default host-clue">
                            <div class="panel-heading clearfix"><strong class="pull-left">{{ '2000' | currency:'$':0 }}</strong>
                                <div ng-show="data.clue_DJ_2_5.daily_double" class="label label-warning pull-right">DD</div>
                                <div class="pull-right visible-xs visible-sm"><em>{{ data.category_DJ_2.category_name | lowercase }}</em></div>
                            </div>
                            <div style="padding:5px;" class="panel-body text-center">{{ data.clue_DJ_2_5.clue_text }}</div>
                        </div>
                    </div>
                    <div class="col-md-2">
                        <div ng-click="startClue(&quot;clue_DJ_3_5&quot;)" ng-show="data.clue_DJ_3_5 &amp;&amp; !game.clue_DJ_3_5" style="cursor:pointer;" class="panel panel-default host-clue">
                            <div class="panel-heading clearfix"><strong class="pull-left">{{ '2000' | currency:'$':0 }}</strong>
                                <div ng-show="data.clue_DJ_3_5.daily_double" class="label label-warning pull-right">DD</div>
                                <div class="pull-right visible-xs visible-sm"><em>{{ data.category_DJ_3.category_name | lowercase }}</em></div>
                            </div>
                            <div style="padding:5px;" class="panel-body text-center">{{ data.clue_DJ_3_5.clue_text }}</div>
                        </div>
                    </div>
                    <div class="col-md-2">
                        <div ng-click="startClue(&quot;clue_DJ_4_5&quot;)" ng-show="data.clue_DJ_4_5 &amp;&amp; !game.clue_DJ_4_5" style="cursor:pointer;" class="panel panel-default host-clue">
                            <div class="panel-heading clearfix"><strong class="pull-left">{{ '2000' | currency:'$':0 }}</strong>
                                <div ng-show="data.clue_DJ_4_5.daily_double" class="label label-warning pull-right">DD</div>
                                <div class="pull-right visible-xs visible-sm"><em>{{ data.category_DJ_4.category_name | lowercase }}</em></div>
                            </div>
                            <div style="padding:5px;" class="panel-body text-center">{{ data.clue_DJ_4_5.clue_text }}</div>
                        </div>
                    </div>
                    <div class="col-md-2">
                        <div ng-click="startClue(&quot;clue_DJ_5_5&quot;)" ng-show="data.clue_DJ_5_5 &amp;&amp; !game.clue_DJ_5_5" style="cursor:pointer;" class="panel panel-default host-clue">
                            <div class="panel-heading clearfix"><strong class="pull-left">{{ '2000' | currency:'$':0 }}</strong>
                                <div ng-show="data.clue_DJ_5_5.daily_double" class="label label-warning pull-right">DD</div>
                                <div class="pull-right visible-xs visible-sm"><em>{{ data.category_DJ_5.category_name | lowercase }}</em></div>
                            </div>
                            <div style="padding:5px;" class="panel-body text-center">{{ data.clue_DJ_5_5.clue_text }}</div>
                        </div>
                    </div>
                    <div class="col-md-2">
                        <div ng-click="startClue(&quot;clue_DJ_6_5&quot;)" ng-show="data.clue_DJ_6_5 &amp;&amp; !game.clue_DJ_6_5" style="cursor:pointer;" class="panel panel-default host-clue">
                            <div class="panel-heading clearfix"><strong class="pull-left">{{ '2000' | currency:'$':0 }}</strong>
                                <div ng-show="data.clue_DJ_6_5.daily_double" class="label label-warning pull-right">DD</div>
                                <div class="pull-right visible-xs visible-sm"><em>{{ data.category_DJ_6.category_name | lowercase }}</em></div>
                            </div>
                            <div style="padding:5px;" class="panel-body text-center">{{ data.clue_DJ_6_5.clue_text }}</div>
                        </div>
                    </div>
                </div>
            </div>
            <div ng-show="game.round == &quot;FJ&quot;">
                <div class="panel panel-primary">
                    <div class="panel-heading"><strong>{{data.category_FJ_1.category_name}}</strong> {{data.category_FJ_1.category_comments}}</div>
                    <div ng-show="!game.clue_FJ" class="panel-body">
                        <div class="row">
                            <div class="col-md-4 text-center">
                                <h4>{{ game.player_1.name || 'Player 1' }}</h4>
                                <div class="input-group">
                                    <div class="input-group-addon">$</div>
                                    <input type="number" ng-model="game.player_1.fj_wager" class="form-control"/>
                                </div>
                            </div>
                            <div class="col-md-4 text-center">
                                <h4>{{ game.player_2.name || 'Player 2' }}</h4>
                                <div class="input-group">
                                    <div class="input-group-addon">$</div>
                                    <input type="number" ng-model="game.player_2.fj_wager" class="form-control"/>
                                </div>
                            </div>
                            <div class="col-md-4 text-center">
                                <h4>{{ game.player_3.name || 'Player 3' }}</h4>
                                <div class="input-group">
                                    <div class="input-group-addon">$</div>
                                    <input type="number" ng-model="game.player_3.fj_wager" class="form-control"/>
                                </div>
                            </div>
                        </div><br/>
                        <div class="row">
                            <div class="col-md-12 text-center"><a target="_blank" ng-href="http://www.j-archive.com/wageringcalculator.php?a={{game.player_1.score}}&amp;b={{game.player_2.score}}&amp;c={{game.player_3.score}}&amp;player_a={{game.player_1.name}}&amp;player_b={{game.player_2.name}}&amp;player_c={{game.player_3.name}}">[wagering suggestions for these scores]</a></div>
                        </div>
                    </div>
                    <div ng-show="!game.clue_FJ" class="panel-footer text-center">
                        <button type="button" ng-click="startClue('clue_FJ')" class="btn btn-lg btn-success">Submit</button>
                    </div>
                </div>
            </div>
            <div ng-show="game.round == &quot;end&quot;">
                <h1 class="text-center">Game over!</h1>
                <p class="text-center"><a target="_blank" ng-href="http://www.j-archive.com/showgame.php?game_id={{data.id}}">Show game @ J! Archive</a></p>
                <p class="text-center"><a target="_blank" ng-href="http://www.j-archive.com/showgameresponses.php?game_id={{data.id}}">Show game responses @ J! Archive</a></p>
            </div>
        </div>
        <div ng-class="{&quot;alert-danger&quot;: timer &lt; 60}" class="clock alert alert-success">{{ timer | secondsToTime | date:'m:ss' }}</div>
    </div>
</template>
<script>
import GameStore from '../stores/game.js'
import Game5233 from '../stores/game5233.json'
import GameControls from '../components/GameControls'
import GameQuestions from '../components/GameQuestions'

export default {
    name: 'Game',
    components: {
        GameControls,
        GameQuestions
    },
    data () {
        return {
            data: Game5233,
            game: GameStore.shared
        }
    },
    methods: {
        startClue (id) {
            console.log('Start clue')
        }
    }
}
</script>
<style lang="css" scoped>
    .category-name {
        width: 75%;
    }
    .equal, .equal > div[class*='col-'] {
        display: flex;
        flex: 1 1 auto;
        align-items: baseline;
    }
</style>
