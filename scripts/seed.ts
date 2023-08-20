import type { Prisma } from '@prisma/client'
import { db } from 'api/src/lib/db'

export default async () => {
  try {
    //
    // Manually seed via `yarn rw prisma db seed`
    // Seeds automatically with `yarn rw prisma migrate dev` and `yarn rw prisma migrate reset`
    //
    // Update "const data = []" to match your data model and seeding needs
    //
    const data: Prisma.UserExampleCreateArgs['data'][] = [
      // To try this example data with the UserExample model in schema.prisma,
      // uncomment the lines below and run 'yarn rw prisma migrate dev'
      //
      // { name: 'alice', email: 'alice@example.com' },
      // { name: 'mark', email: 'mark@example.com' },
      // { name: 'jackie', email: 'jackie@example.com' },
      // { name: 'bob', email: 'bob@example.com' },
    ]
    console.log(
      "\nUsing the default './scripts/seed.{js,ts}' template\nEdit the file to add seed data\n"
    )

    // Note: if using PostgreSQL, using `createMany` to insert multiple records is much faster
    // @see: https://www.prisma.io/docs/reference/api-reference/prisma-client-reference#createmany
    Promise.all(
      //
      // Change to match your data model and seeding needs
      //
      data.map(async (data: Prisma.UserExampleCreateArgs['data']) => {
        const record = await db.userExample.create({ data })
        console.log(record)
      })
    )

    // If using dbAuth and seeding users, you'll need to add a `hashedPassword`
    // and associated `salt` to their record. Here's how to create them using
    // the same algorithm that dbAuth uses internally:
    //
    //   import { hashPassword } from '@redwoodjs/auth-dbauth-api'
    //
    //   const users = [
    //     { name: 'john', email: 'john@example.com', password: 'secret1' },
    //     { name: 'jane', email: 'jane@example.com', password: 'secret2' }
    //   ]
    //
    //   for (const user of users) {
    //     const [hashedPassword, salt] = hashPassword(user.password)
    //     await db.user.create({
    //       data: {
    //         name: user.name,
    //         email: user.email,
    //         hashedPassword,
    //         salt
    //       }
    //     })
    //   }

    const animationHistories = [
      {
        id: 'a98c89a0-9b1a-11eb-a8b3-0242ac130003',
        name: 'Animation 1',
        description: 'This is animation 1',
      },
    ]

    for (const animationHistory of animationHistories) {
      await db.animationHistory.create({
        data: animationHistory,
      })
    }

    const animations = [
      {
        id: 1,
        name: 'Animation 1',
        description: 'This is animation 1',
        uuid: 'f1b9c9a0-9b1a-11eb-a8b3-0242ac130003',
        animationHistoryId: 'a98c89a0-9b1a-11eb-a8b3-0242ac130003',
        version: 1,
        createdAt: '2021-04-10T00:00:00.000Z',
        updatedAt: '2021-04-10T00:00:00.000Z',
      },
    ]

    for (const animation of animations) {
      await db.animation.create({
        data: animation,
      })
    }

    const animationTracks = [
      {
        id: 1,
        name: 'Track 1',
        description: 'This is track 1',
        uuid: 'f1b9c9a0-9b1a-11eb-a8b3-0242ac130003',
        revisionId: 1,
        createdAt: '2021-04-10T00:00:00.000Z',
        updatedAt: '2021-04-10T00:00:00.000Z',
        sortNumber: 1,
      },
      {
        id: 2,
        name: 'Track 2',
        description: 'This is track 2',
        uuid: 'f1b9c9a0-9b1a-11eb-a8b3-0242ac130004',
        revisionId: 1,
        createdAt: '2021-04-10T00:00:00.000Z',
        updatedAt: '2021-04-10T00:00:00.000Z',
        sortNumber: 2,
      },
    ]

    for (const animationTrack of animationTracks) {
      await db.animationTrack.create({
        data: animationTrack,
      })
    }

    const animationEntities = [
      {
        id: 1,
        name: 'Entity 1',
        description: 'This is entity 1',
        uuid: 'f1b9c9a0-9b1a-11eb-a8b3-0242ac130003',
        revisionId: 1,
        createdAt: '2021-04-10T00:00:00.000Z',
        updatedAt: '2021-04-10T00:00:00.000Z',
        image: '',
        html: `
        <div></div>
        `,
        css: `
        {
          width: 32px;
          height: 32px;
          background: #f00;
        }
        `,
      },
      {
        id: 2,
        name: 'Entity 2',
        description: 'This is entity 2',
        uuid: 'f1b9c9a0-9b1a-11eb-a8b3-0242ac130303',
        revisionId: 1,
        createdAt: '2021-04-10T00:00:00.000Z',
        updatedAt: '2021-04-10T00:00:00.000Z',
        image: '',
        html: `
        <div></div>
        `,
        css: `
        {
          width: 64px;
          height: 64px;
          background: #f00;
        }
        `,
      },
    ]

    for (const animationEntity of animationEntities) {
      await db.animationEntity.create({
        data: animationEntity,
      })
    }

    const animationTrackClips = [
      {
        id: 1,
        uuid: 'f1b9c9a0-9b1a-11eb-a8b3-0242ac130003',
        animationTrackId: 1,
        start: 0,
        animationEntityId: 1,
      },
      {
        id: 2,
        uuid: 'f1b9c9a0-9b1a-11eb-a8b3-0242ac130004',
        animationTrackId: 1,
        start: 20,
        animationEntityId: 2,
      },
      {
        id: 3,
        uuid: 'f1b9c9a0-9b1a-11eb-a8b3-0242ac130005',
        animationTrackId: 2,
        start: 10,
        animationEntityId: 1,
      },
    ]

    for (const animationTrackClip of animationTrackClips) {
      await db.animationTrackClip.create({
        data: animationTrackClip,
      })
    }

    const animationTrackKeyframes = [
      {
        id: 1,
        animationTrackClipId: 1,
        uuid: 'f1b9c9a0-9b1a-11eb-a8b3-0242ac130003',
        sort: 0,
        duration: 20,
        css: `
        {
          margin-left: 0px;
        }
        `,
      },
      {
        id: 2,
        animationTrackClipId: 1,
        uuid: 'f1b9c9a0-9b1a-11eb-a8b3-0242ac130004',
        sort: 1,
        duration: 0,
        css: `
        {
          margin-left: 32px;
        }
        `,
      },
      {
        id: 3,
        animationTrackClipId: 2,
        uuid: 'f1b9c9a0-9b1a-11eb-a8b3-0242ac130005',
        sort: 0,
        duration: 10,
        css: `
        {
          margin-left: 0px;
        }
        `,
      },
      {
        id: 4,

        animationTrackClipId: 3,
        uuid: 'f1b9c9a0-9b1a-11eb-a8b3-0242ac130006',
        sort: 0,
        duration: 10,
        css: `
        {
          margin-left: 0px;
        }
        `,
      },
    ]

    for (const animationTrackKeyframe of animationTrackKeyframes) {
      await db.animationTrackKeyframe.create({
        data: animationTrackKeyframe,
      })
    }
  } catch (error) {
    console.warn('Please define your seed data.')
    console.error(error)
  }
}
