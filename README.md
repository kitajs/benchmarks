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
* __Node:__ `v20.19.0`
* __Run:__ Mon Mar 24 2025 01:32:47 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| bare                     | v20.19.0 | ✗      | 47413.6    | 20.60        | 8.45          |
| fastify                  | 4.29.0   | ✓      | 46555.2    | 20.97        | 8.35          |
| polkadot                 | 1.0.0    | ✗      | 46433.6    | 21.04        | 8.28          |
| kita                     | 1.1.36   | ✓      | 46428.0    | 21.03        | 8.32          |
| polka                    | 0.5.2    | ✓      | 46273.6    | 21.11        | 8.25          |
| rayo                     | 1.4.6    | ✓      | 46172.0    | 21.15        | 8.23          |
| server-base-router       | 7.1.32   | ✓      | 45869.6    | 21.30        | 8.18          |
| 0http                    | 3.5.3    | ✓      | 45561.6    | 21.45        | 8.13          |
| connect                  | 3.7.0    | ✗      | 45386.4    | 21.53        | 8.09          |
| server-base              | 7.1.32   | ✗      | 45243.2    | 21.61        | 8.07          |
| connect-router           | 1.3.8    | ✓      | 43250.4    | 22.61        | 7.71          |
| h3                       | 1.15.1   | ✗      | 42780.8    | 22.88        | 7.63          |
| h3-router                | 1.15.1   | ✓      | 41834.4    | 23.41        | 7.46          |
| hono                     | 4.7.5    | ✓      | 40185.6    | 24.37        | 6.59          |
| restana                  | 4.9.9    | ✓      | 38241.0    | 25.66        | 6.82          |
| koa                      | 2.16.0   | ✗      | 36650.2    | 26.79        | 6.54          |
| take-five                | 2.0.0    | ✓      | 35353.8    | 27.79        | 12.71         |
| restify                  | 11.1.0   | ✓      | 35082.2    | 27.99        | 6.32          |
| koa-isomorphic-router    | 1.0.1    | ✓      | 34066.6    | 28.86        | 6.08          |
| koa-router               | 12.0.1   | ✓      | 32679.0    | 30.10        | 5.83          |
| hapi                     | 21.4.0   | ✓      | 31298.6    | 31.44        | 5.58          |
| fastify-big-json         | 4.29.0   | ✓      | 11724.2    | 84.74        | 134.89        |
| express                  | 4.21.2   | ✓      | 10986.6    | 90.44        | 1.96          |
| express-with-middlewares | 4.21.2   | ✓      | 10486.2    | 94.75        | 3.90          |
| micro-route              | 2.5.0    | ✓      | N/A        | N/A          | N/A           |
| micro                    | 10.0.1   | ✗      | N/A        | N/A          | N/A           |
| microrouter              | 3.1.3    | ✓      | N/A        | N/A          | N/A           |
| trpc-router              | 10.45.2  | ✓      | N/A        | N/A          | N/A           |
