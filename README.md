<div align="center">
  <img src="https://github.com/fastify/graphics/raw/HEAD/fastify-landscape-outlined.svg" width="650" height="auto"/>
</div>

<div align="center">

[![CI](https://github.com/fastify/fastify/workflows/ci/badge.svg)](https://github.com/fastify/fastify/actions/workflows/ci.yml)
[![Coverage Status](https://coveralls.io/repos/github/fastify/fastify/badge.svg?branch=master)](https://coveralls.io/github/fastify/fastify?branch=master)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](http://standardjs.com/)
[![NPM version](https://img.shields.io/npm/v/fastify.svg?style=flat)](https://www.npmjs.com/package/fastify)
[![NPM downloads](https://img.shields.io/npm/dm/fastify.svg?style=flat)](https://www.npmjs.com/package/fastify) [![Discord](https://img.shields.io/discord/725613461949906985)](https://discord.gg/fastify)

</div>
<br />

# TL;DR

* [Fastify](https://github.com/fastify/fastify) is a fast and low overhead web framework for Node.js.
* This package shows how fast it is comparatively.
* For metrics (cold-start) see [metrics.md](./METRICS.md)

# Requirements

To be included in this list, the framework should captivate users' interest. We have identified the following minimal requirements:
- **Ensure active usage**: a minimum of 500 downloads per week
- **Maintain an active repository** with at least one event (comment, issue, PR) in the last month
- The framework must use the **Node.js** HTTP module

# Usage

Clone this repo. Then 

```
node ./benchmark [arguments (optional)]
```

#### Arguments

* `-h`: Help on how to use the tool.
* `compare`: Get comparative data for your benchmarks.

> You may also compare all test results, at once, in a single table; `benchmark compare -t`

> You can also extend the comparison table with percentage values based on fastest result; `benchmark compare -p`
# Benchmarks

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Node:__ `v20.18.1`
* __Run:__ Mon Jan 27 2025 01:27:36 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| bare                     | v20.18.1 | ✗      | 48668.0    | 20.06        | 8.68          |
| polka                    | 0.5.2    | ✓      | 47936.0    | 20.36        | 8.55          |
| fastify                  | 4.29.0   | ✓      | 47156.8    | 20.69        | 8.46          |
| kita                     | 1.1.36   | ✓      | 47019.2    | 20.75        | 8.43          |
| connect                  | 3.7.0    | ✗      | 46972.8    | 20.76        | 8.38          |
| server-base              | 7.1.32   | ✗      | 46833.6    | 20.83        | 8.35          |
| 0http                    | 3.5.3    | ✓      | 46637.6    | 20.94        | 8.32          |
| rayo                     | 1.4.6    | ✓      | 46604.8    | 20.94        | 8.31          |
| server-base-router       | 7.1.32   | ✓      | 46131.2    | 21.18        | 8.23          |
| polkadot                 | 1.0.0    | ✗      | 45881.6    | 21.30        | 8.18          |
| h3                       | 1.14.0   | ✗      | 44616.8    | 21.91        | 7.96          |
| connect-router           | 1.3.8    | ✓      | 43301.6    | 22.58        | 7.72          |
| h3-router                | 1.14.0   | ✓      | 42707.2    | 22.91        | 7.62          |
| hono                     | 4.6.19   | ✓      | 41756.0    | 23.47        | 6.85          |
| restana                  | 4.9.9    | ✓      | 40758.0    | 24.04        | 7.27          |
| koa                      | 2.15.3   | ✗      | 37699.4    | 26.03        | 6.72          |
| restify                  | 11.1.0   | ✓      | 36040.6    | 27.25        | 6.50          |
| koa-isomorphic-router    | 1.0.1    | ✓      | 36027.0    | 27.26        | 6.42          |
| take-five                | 2.0.0    | ✓      | 35758.2    | 27.46        | 12.86         |
| koa-router               | 12.0.1   | ✓      | 34605.8    | 28.40        | 6.17          |
| hapi                     | 21.3.12  | ✓      | 32740.4    | 30.04        | 5.84          |
| fastify-big-json         | 4.29.0   | ✓      | 11820.0    | 84.03        | 136.00        |
| express                  | 4.21.2   | ✓      | 11436.8    | 86.85        | 2.04          |
| express-with-middlewares | 4.21.2   | ✓      | 10726.2    | 92.62        | 3.99          |
| micro-route              | 2.5.0    | ✓      | N/A        | N/A          | N/A           |
| micro                    | 10.0.1   | ✗      | N/A        | N/A          | N/A           |
| microrouter              | 3.1.3    | ✓      | N/A        | N/A          | N/A           |
| trpc-router              | 10.45.2  | ✓      | N/A        | N/A          | N/A           |
