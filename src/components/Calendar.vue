<template>
  <q-calendar-month
    ref="calendar"
    v-model="selectedDate"
    animated
    bordered
    focusable
    hoverable
    no-active-date
    :day-min-height="90"
    :day-height="10"
    @change="onChange"
    @moved="onMoved"
    @click-date="onClickDate"
    @click-day="onClickDay"
    @click-workweek="onClickWorkweek"
    @click-head-workweek="onClickHeadWorkweek"
    @click-head-day="onClickHeadDay"
  >
    <template #day="{ scope: { timestamp } }">
      <template v-for="event in eventsMap[timestamp.date]" :key="event.id">
        <div :class="badgeClasses(event, 'day')" :style="badgeStyles(event, 'day')" class="my-event">
          <abbr :title="event.details" class="tooltip">
            <span class="title q-calendar__ellipsis">{{ event.title + (event.time ? " - " + event.time : "") }}</span>
          </abbr>
        </div>
      </template>
    </template>
  </q-calendar-month>
</template>

<script>
import {
  QCalendarMonth,
  addToDate,
  parseDate,
  parseTimestamp,
  today,
} from '@quasar/quasar-ui-qcalendar'
import '@quasar/quasar-ui-qcalendar/src/QCalendarVariables.sass'
import '@quasar/quasar-ui-qcalendar/src/QCalendarTransitions.sass'
import '@quasar/quasar-ui-qcalendar/src/QCalendarMonth.sass'

import { defineComponent, ref, computed } from 'vue-demi'

const CURRENT_DAY = new Date()
const getCurrentDay = (day) => {
  const newDay = new Date(CURRENT_DAY)
  newDay.setDate(day)
  const tm = parseDate(newDay)
  return tm.date
}
const eventList = [
  {
    id: 1,
    title: '1st of the Month',
    details: 'Everything is funny as long as it is happening to someone else',
    date: getCurrentDay(1),
    bgcolor: 'orange',
  },
  {
    id: 2,
    title: 'Sisters Birthday',
    details: 'Buy a nice present',
    date: getCurrentDay(4),
    bgcolor: 'green',
    icon: 'fas fa-birthday-cake',
  },
  {
    id: 3,
    title: 'Meeting',
    details: 'Time to pitch my idea to the company',
    date: getCurrentDay(10),
    time: '10:00',
    duration: 120,
    bgcolor: 'red',
    icon: 'fas fa-handshake',
  },
  {
    id: 4,
    title: 'Lunch',
    details: 'Company is paying!',
    date: getCurrentDay(10),
    time: '11:30',
    duration: 90,
    bgcolor: 'teal',
    icon: 'fas fa-hamburger',
  },
  {
    id: 5,
    title: 'Visit mom',
    details: 'Always a nice chat with mom',
    date: getCurrentDay(20),
    time: '17:00',
    duration: 90,
    bgcolor: 'grey',
    icon: 'fas fa-car',
  },
  {
    id: 6,
    title: 'Conference',
    details: 'Teaching Javascript 101',
    date: getCurrentDay(22),
    time: '08:00',
    duration: 540,
    bgcolor: 'blue',
    icon: 'fas fa-chalkboard-teacher',
  },
  {
    id: 7,
    title: 'Girlfriend',
    details: 'Meet GF for dinner at Swanky Restaurant',
    date: getCurrentDay(22),
    time: '19:00',
    duration: 180,
    bgcolor: 'teal',
    icon: 'fas fa-utensils',
  },
  {
    id: 8,
    title: 'Rowing',
    details: 'Stay in shape!',
    date: getCurrentDay(27),
    bgcolor: 'purple',
    icon: 'rowing',
    days: 2,
  },
  {
    id: 9,
    title: 'Fishing',
    details: 'Time for some weekend R&R',
    date: getCurrentDay(27),
    bgcolor: 'purple',
    icon: 'fas fa-fish',
    days: 2,
  },
  {
    id: 10,
    title: 'Vacation',
    details:
      'Trails and hikes, going camping! Don\'t forget to bring bear spray!',
    date: getCurrentDay(29),
    bgcolor: 'purple',
    icon: 'fas fa-plane',
    days: 5,
  },
]

export default defineComponent({
  components: { QCalendarMonth },
  setup () {
    // data
    const calendar = ref()
    const selectedDate = ref(today())
    const events = ref(eventList)

    // computed
    const eventsMap = computed(() => {
      const map = {}
      if (events.value.length > 0) {
        events.value.forEach((event) => {
          (map[event.date] = map[event.date] || []).push(event)
          if (event.days !== undefined) {
            let timestamp = parseTimestamp(event.date)
            let days = event.days
            // add a new event for each day
            // skip 1st one which would have been done above
            do {
              timestamp = addToDate(timestamp, { day: 1 })
              if (!map[timestamp.date]) {
                map[timestamp.date] = []
              }
              map[timestamp.date].push(event)
              // already accounted for 1st day
            } while (--days > 1)
          }
        })
      }
      return map
    })

    // methods
    const badgeClasses = (event, type) => {
      return {
        [`text-white bg-${event.bgcolor}`]: true,
        'rounded-border': true,
      }
    }
    const badgeStyles = (day, event) => {
      const s = {}
      // s.left = day.weekday === 0 ? 0 : (day.weekday * this.parsedCellWidth) + '%'
      // s.top = 0
      // s.bottom = 0
      // s.width = (event.days * this.parsedCellWidth) + '%'
      return s
    }
    const onToday = () => {
      calendar.value.moveToToday()
    }
    const onPrev = () => {
      calendar.value.prev()
    }
    const onNext = () => {
      calendar.value.next()
    }
    const onMoved = (data) => {
    }
    const onChange = (data) => {
    }
    const onClickDate = (data) => {
    }
    const onClickDay = (data) => {
    }
    const onClickWorkweek = (data) => {
    }
    const onClickHeadDay = (data) => {
    }
    const onClickHeadWorkweek = (data) => {
    }

    return {
      calendar,
      selectedDate,
      events,
      eventsMap,
      badgeClasses,
      badgeStyles,
      onToday,
      onPrev,
      onNext,
      onMoved,
      onChange,
      onClickDate,
      onClickDay,
      onClickWorkweek,
      onClickHeadDay,
      onClickHeadWorkweek,
    }
  },
})
</script>

<style lang="scss" scoped>
.my-event {
  @apply mt-1px relative;
  @apply w-full;
  @apply justify-center;
  @apply cursor-pointer;
  @apply text-sm overflow-ellipsis;

  overflow: hidden;

  abbr {
    &.tooltip {
      @apply no-underline;
    }

    .title {
      @apply flex relative justify-center items-center;
      @apply relative;
      @apply h-full;
    }
  }
}

.rounded-border {
  @apply rounded-sm;
}
</style>
