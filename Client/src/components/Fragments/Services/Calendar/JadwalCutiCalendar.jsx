import FullCalendar from "@fullcalendar/react";
import { formatDate } from "@fullcalendar/core";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";

export const CutiCalendar = (props) => {
  const { currentEvents, handleDateClick, handleEventClick } = props;
  return (
    <div className="m-5 grid grid-cols-2fr">
      <div className="bg-gray-50 p-[15px] rounded w-[200px] max-h-[80vh] overflow-auto">
        <h2 className="text-xl mt-0 mb-2 font-bold">
          {currentEvents.length} Jadwal
        </h2>
        <div className="flex flex-col gap-2">
          {currentEvents.length === 0 ? (
            <div className="ring-2 ring-blue-200 rounded p-2">
              <p>
                Belum ada jadwal yang tersedia, tambahkan jadwal baru di menu
                Calendar.
              </p>
            </div>
          ) : (
            currentEvents.map((event) => (
              <div
                key={event.id}
                className="overflow-auto grow border-b-2 border-l-2 border-sky-500 shadow p-2 rounded"
              >
                <div className="text-sky-500 font-bold">{event.title}</div>
                <div className="">
                  {formatDate(event.start, {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </div>
              </div>
            ))
          )}
        </div>
      </div>
      <div className="mx-4">
        <FullCalendar
          height="80vh"
          plugins={[dayGridPlugin, interactionPlugin, listPlugin]}
          headerToolbar={{
            left: "prev,next today",
            center: "title",
            right: "dayGridMonth,listMonth",
          }}
          initialView="dayGridMonth"
          editable={true}
          selectable={true}
          selectMirror={true}
          dayMaxEvents={true}
          select={handleDateClick}
          eventClick={handleEventClick}
          events={currentEvents}
        />
      </div>
    </div>
  );
};
