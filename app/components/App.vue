<template>
    <Page class="page">
        <ActionBar class="action-bar" backgroundColor="#ff0000">
            <SegmentedBar selectedBackgroundColor="#ffffff" color="#ffffff"
                @selectedIndexChange="onSegmentedBarFocusChange">
                <SegmentedBarItem title="市场" />
                <SegmentedBarItem title="自选股" />
            </SegmentedBar>
        </ActionBar>
        <ScrollView class="scroll-view">
            <StackLayout v-if="activeIndex === 0">
                <FlexboxLayout flexDirection="row" justifyContent="space-around">
                    <FlexboxLayout flexDirection="column" alignItems="center"
                        :class="shIndex.delta >= 0 ? 'up': 'down'" class="index-item">
                        <Label :text="shIndex.value" class="index-val" />
                        <FlexboxLayout flexDirection="row">
                            <Label text="上证指数" class="index-text" />
                            <Label :text="shIndex.delta >= 0 ? '+' : '-'"
                                class="delta-sign" />
                            <Label :text="`${formatDelta(shIndex.delta)}%`"
                                class="delta-val" />
                        </FlexboxLayout>
                    </FlexboxLayout>
                    <FlexboxLayout flexDirection="column" alignItems="center"
                        :class="szIndex.delta >= 0 ? 'up': 'down'" class="index-item">
                        <Label :text="szIndex.value" class="index-val" />
                        <FlexboxLayout flexDirection="row">
                            <Label text="深证指数" class="index-text" />
                            <Label :text="szIndex.delta >= 0 ? '+' : '-'"
                                class="delta-sign" />
                            <Label :text="`${formatDelta(szIndex.delta)}%`"
                                class="delta-val" />
                        </FlexboxLayout>
                    </FlexboxLayout>
                    <FlexboxLayout flexDirection="column" alignItems="center"
                        :class="cyIndex.delta >= 0 ? 'up': 'down'" class="index-item">
                        <Label :text="cyIndex.value" class="index-val" />
                        <FlexboxLayout flexDirection="row">
                            <Label text="创业板指" class="index-text" />
                            <Label :text="cyIndex.delta >= 0 ? '+' : ''"
                                class="delta-sign" />
                            <Label :text="`${formatDelta(cyIndex.delta)}%`"
                                class="delta-val" />
                        </FlexboxLayout>
                    </FlexboxLayout>
                </FlexboxLayout>
            </StackLayout>
            <StackLayout v-else>

            </StackLayout>
        </ScrollView>
    </Page>
</template>

<script>
    export default {
        data() {
            return {
                activeIndex: 0,
                shIndex: {
                    value: 2668.17,
                    delta: 0.0136
                },
                szIndex: {
                    value: 8002.1,
                    delta: 0.0118
                },
                cyIndex: {
                    value: 1405.25,
                    delta: 0.0141
                }
            };
        },
        methods: {
            formatDelta(delta) {
                return (delta * 100).toFixed(2);
            },
            onSegmentedBarFocusChange(event) {
                this.activeIndex = event.object.selectedIndex;
            }
        }
    };
</script>

<style lang="scss" scoped>
    $upColor: red;
    $downColor: green;

    .scroll-view {
        background-color: black;
    }

    .index-text,
    .delta-sign,
    .delta-val {
        font-size: 12px;
    }

    .index-item {}

    .up {

        .index-val,
        .delta-sign,
        .delta-val {
            color: $upColor;
        }
    }

    .down {

        .index-val,
        .delta-sign,
        .delta-val {
            color: $downColor;
        }
    }
</style>